const { writeFileSync, readFileSync } = require('fs')
const path = require('path')

function setVersionFile(projectPath) {
  let currentVersion = Date.now()
  const jsfile = readFileSync(path.resolve(__dirname, './reload-page.js'))
  writeFileSync(projectPath + '/update_popup_version.txt', currentVersion + '', {flag: 'w+'});
  writeFileSync(path.resolve(__dirname, '../src/reload-page.js'), `window.currentVersion = '${currentVersion}';${jsfile}`, {flag: 'w+'});
}

module.exports = setVersionFile