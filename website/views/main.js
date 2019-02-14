const html = require('choo/html')
const raw = require('choo/html/raw')
const data = require('../issues.json')

const TITLE = 'dat comm-comm'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <h1 class="f-title pb2 tc bb mw6 center">Dat Comm-Comm</h1>
      <main class="w-100 flex-ns justify-center">
        <section class="mw6 w-50-m w-third-l pa3">
          <h2>1.</h2>
          <p>
            <a href="https://github.com/dat-land/comm-comm">Dat comm-comm</a> is an open working group with a focus on improving the communication around Dat. It is also a place where users and companies can share their experiences using Dat. Loosely structured community communication repo.
          </p>

          <p>
            Open to anyone.
          </p>

          <br>

          <h2>2.</h2>

          <p>
            Currently, the community members hold weekly calls, in turns held by community members Martin and Diego.
          </p>

          <ul>
            <li class="mb2">
              <strong>eastern-europe/asia/oceania</strong><br>
              As Martin is in Japan, he holds the calls between GMT 9:00 which should suite eastern-europe/asia/oceania.
            </li>
            <li class="mb2">
              <strong>europe and the americas</strong><br>
              Diego's call are usually at GMT 18:00 which should suite the europe and the americas.
            </li>
          </ul>
        </section>

        <section class="fl mw7 w-50-m pa3 ml3">
          <h2>Upcoming Meetings:</h2>

          ${data.issues.map(issue => {
            const content = issue.content.split(/^(.*)?\n/)
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
          })}
        </section>
      </main>
    </body>
  `
}
