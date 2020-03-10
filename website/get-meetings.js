import { markdowner } from 'smh-markdowner'
import { promises as fs } from 'fs'
import ghGot from 'gh-got'
import moment from 'moment-timezone'
import { createEvents } from 'ics'

(async () => {
  const timezones = moment.tz.names()
  const { body } = await ghGot('repos/dat-land/comm-comm/issues?state=all&labels=meeting')
  const meetings = (await Promise.all(
    body
      .filter(issue => !issue.pull_request)
      .map(async (issue) => {
        let assignee
        if (issue.assignee) {
          assignee = {
            login: issue.assignee.login,
            avatar_url: issue.assignee.avatar_url
          }
        }
        let time
        const timeParts = /^(\s|⏰|:alarm_clock:)*Time:\s*(\d{1,2} \w{3} \d{4}, \d{1,2}:\d{2}) (.*)\s*$/gm.exec(issue.body)
        if (timeParts) {
          const timezone = timeParts[3]
          if (timezones.includes(timezone)) {
            time = moment.tz(timeParts[2], 'DD MMM YYYY, hh:mm', timezone)
          } else {
            console.log(`#${issue.number} has a unknown timezone ${timezone}`)
          }
        }
        return {
          title: issue.title,
          uid: `dat-land-comm-comm-meeting-${issue.number}`,
          updated_at: moment(issue.updated_at),
          created_at: moment(issue.created_at),
          time,
          number: issue.number,
          assignee,
          markdown: issue.body,
          html: (await markdowner(issue.body)).content,
          url: issue.html_url
        }
      })
  ))
    .filter(issue => {
      if (!issue.time) {
        console.log(`#${issue.number} doesn't have a time.`)
        return false
      }
      if (!issue.assignee) {
        console.log(`#${issue.number} does't have an assignee.`)
        return false
      }
      return true
    }) // Skipping issues without time or assignee (not confirmed)
    .sort((a, b) => {
      if (a.time > b.time) return 1
      if (a.time < b.time) return -1
      return 0
    })
  await fs.writeFile(`meetings.json`, JSON.stringify({ meetings }, null, 2))

  const cal = createEvents(
    meetings.map(meeting => {
      const time = meeting.time.tz('utc')
      return {
        start: [time.year(), time.month() + 1, time.date(), time.hour(), time.minute()],
        duration: { hours: 1 },
        uid: meeting.uid,
        timestamp: meeting.updated_at.utc().format('YYYYMMDDTHHMMSS') + 'Z',
        startType: 'utc',
        title: meeting.title,
        description: meeting.markdown,
        alarms: [
          { action: 'display', description: 'One hour until DAT comm-comm meeting', trigger: { hours: 1, minutes: 0, before: true } }
        ],
        url: meeting.url
      }
    })
  )
  if (cal.error) {
    console.warn(cal.error)
    return
  } else {
    await fs.writeFile(`assets/dat-land_comm-comm.ics`, cal.value)
  }

  console.log(`Yay! all done, Number of issues processed ${body.length} resulting in ${meetings.length} meetings.`)
})()
