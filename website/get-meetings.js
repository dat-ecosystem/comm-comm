import { markdowner } from 'smh-markdowner'
import { promises as fs } from 'fs'
import ghGot from 'gh-got'
import moment from 'moment-timezone'
import { createEvents } from 'ics'

(async () => {
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
        const timeParts = /^\s*Time:\s*(\d{1,2} \w{3} \d{4}, \d{1,2}:\d{2}) (.*)\s*$/gm.exec(issue.body)
        if (timeParts) {
          time = moment.tz(timeParts[1], 'DD MMM YYYY, hh:mm', timeParts[2])
        }
        return {
          title: issue.title,
          uid: `dat-land-comm-comm-meeting-${issue.number}`,
          updated_at: moment(issue.updated_at),
          created_at: moment(issue.created_at),
          time,
          assignee,
          markdown: issue.body,
          html: (await markdowner(issue.body)).content,
          url: issue.html_url
        }
      })
  ))
    .filter(issue => issue.time && issue.assignee) // Skipping issues without time or assignee (not confirmed)
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
  } else {
    await fs.writeFile(`assets/dat-land_comm-comm.ics`, cal.value)
  }

  console.log('yay! all done')
  console.log(`number of issues added ${body.length}`)
})()
