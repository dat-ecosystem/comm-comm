# comm-comm-site

website for the Dat comm-comm working group

* Displays basic information about comm-comm.
* Pulls in latest issues that are **open** and labeled **meeting**, rebuilt on update via webhook.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b37bb6c9-1e02-4f35-a312-f9392e3a04bb/deploy-status)](https://app.netlify.com/sites/dat-comm-comm/deploys)

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Running

* Clone repo
* `npm install`
* `npm run get-issues` - download the latest issues from GH
* `npm start` - run development server


### Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
`$ npm run get-issues` | Download latest issues from GitHub
`$ npm run get-readme` | Generate `readme.json` from parent folder
`$ npm run get-data`   | Run both `get-issues` and `get-readme`
`$ npm run ci`         | Run `test` & `get-data` & `build`



## Deployment

* Deployed via Netlify
* Build with: `npm run ci`
* `dist` folder deployed

### Github Webook

* Uses webhook on *any* issue update in this repo to rebuild.

## Built With

* [Create-Choo-App](http://github.com/choojs/create-choo-app) - Choo + Bankai starter app.
* [ghGot](https://github.com/sindresorhus/gh-got) - Convenience wrapper for `got` to interact with the GitHub API

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details


