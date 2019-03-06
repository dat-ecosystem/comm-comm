import { markdowner } from 'smh-markdowner'
import { promises as fs } from 'fs'
import path from 'path'

(async () => {
  const rawReadme = await fs.readFile(path.join(__dirname, '..', 'README.md'))
  const html = await markdowner(rawReadme)

  await fs.writeFile(`readme.json`, JSON.stringify(html, null, 2))

  console.log(`Readme updated`)
})()
