const html = require('choo/html')
const raw = require('choo/html/raw')
const data = require('../issues.json')
const readme = require('../readme.json').content

const TITLE = 'dat comm-comm'

module.exports = view

function renderMeeting (meeting) {
  const content = meeting.content.split(/^(.*)?\n/)
  return html`
    <article class="center mw5 mw6-ns hidden ba mv4">
      <h1 class="f4 bg-near-black white mv0 pv2 ph3">
          ${raw(content[1])}
      </h1>
      <div class="pa3 bt">
        <p class="f6 f5-ns lh-copy measure mv0">
          ${raw(content[2])}
        </p>
      </div>
    </article>
  `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <h1 class="f-title pb2 tc bb mw6 center">Dat Comm-Comm</h1>
      <main class="w-100 flex-ns justify-center">
        <section class="mw6 w-50-m w-third-l pa3">
          ${raw(readme)}
        </section>

        <section class="fl mw7 w-50-m pa3 ml3">
          <h2>Upcoming Meetings:</h2>

          ${data.issues.map(renderMeeting)}
        </section>
      </main>
    </body>
  `
}
