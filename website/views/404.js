const html = require('choo/html')

const TITLE = 'comm-comm-site - route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif pa3">
      <h1>Page not found.</h1>
      <a class="pt2" href="/">Back to main.</a>
    </body>
  `
}
