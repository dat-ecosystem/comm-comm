import { markdowner } from './node_modules/smh-markdowner/build/lib/index.js' // ? - why not working
import { promises as fs } from 'fs'
import ghGot from 'gh-got';

(async () => {
  const { body } = await ghGot('repos/dat-land/comm-comm/issues?labels=meeting')
  var data = {}
  data.issues = await Promise.all(body.map(async (issue) => {
    const text = await markdowner(`${issue.title}\n\n${issue.body}\n\n${issue.html_url}`)
    return text
  }))
  await fs.writeFile(`issues.json`, JSON.stringify(data))

  console.log('yay! all done')
  console.log(`number of issues added ${body.length}`)
})()
