# spa-reload-page
# reload-page
### After the front end releases, the page can be refreshed automatically.



## Use

```shell
npm install reload-page
```

```javascript
// main.js/index.js

import { spaUpdate } from 'reload-page';

spaUpdate()
```
# Set Version

### The version file needs to be generated and released to the production file along with the packaged file directory

## Vite

```javascript
// vite.config.js

import setVersionFile from 'reload-page/src/version';
const path = require('path')

export default defineConfig({
  plugins: [
    setVersionFile(path.resolve(__dirname, "./public")),
  ]
})
```
## Vue CLI

```javascript
// vue.config.js

const setVersionFile = require('reload-page/src/version')
const path = require('path')

module.exports = defineConfig({
  chainWebpack() {
    setVersionFile(path.resolve(__dirname, "./public"))
  }
})
```
## webpack

```javascript
// config

const setVersionFile = require('reload-page/src/version')
const path = require('path')

module.exports = {
    plugins: [setVersionFile(path.resolve(__dirname, "./public"))],
}
```


