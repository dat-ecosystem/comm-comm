const html = require('choo/html')
const raw = require('choo/html/raw')
const moment = require('moment-timezone')
const meetings = require('../meetings.json').meetings.map(meeting =>
  Object.assign({}, meeting, { time: moment(meeting.time) })
)
const readme = require('../readme.json').content

const TITLE = 'dat comm-comm'

module.exports = view

function renderMeeting (meeting) {
  return html`
    <article class="center mw5 mw6-ns hidden ba mv4">
      <h3 class="f4 bg-near-black white mv0 pv2 ph3">
        ${meeting.title}
      </h3>
      <div class="pa3 bt">
        <p class="f6 f5-ns lh-copy measure mv0">
          ${raw(meeting.html)}
        </p>
      </div>
    </article>
  `
}

function renderMeetings (title, meetings) {
  if (meetings.length === 0) return ''

  return html`
    <h2>${title}</h2>
    ${meetings.map(renderMeeting)}
  `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  const now = moment()
  const upcoming = meetings.filter(meeting => meeting.time >= now)

  return html`
    <body class="code lh-copy">
      <h1 class="f-title pb2 tc bb mw6 center">Dat Comm-Comm</h1>
      <main class="w-100 flex-ns justify-center">
        <section class="mw6 w-50-m w-third-l pa3">
          ${raw(readme)}
        </section>

        <section class="fl mw7 w-50-m pa3 ml3">
          <a href="/assets/dat-land_comm-comm.ics" target="_blank" style="float: right" download="dat-land_comm-comm.ics"><img src="assets/date_range.svg" alt="Calendar as .ics file"></a>

          ${renderMeetings(`Upcoming Meetings`, upcoming)}
        </section>
      </main>
    </body>
  `
}
