const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular10-webcompponent/main.js',
    './dist/angular10-webcompponent/polyfills.js',
    './dist/angular10-webcompponent/runtime.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/analytics-counter.js');
  await fs.copyFile('./dist/angular10-webcompponent/styles.css', 'elements/styles.css')
  await fs.copy('./dist/angular10-webcompponent/3rdpartylicenses.txt', 'elements/3rdpartylicenses.txt' )
  await fs.copy('./dist/angular10-webcompponent/favicon.ico', 'elements/favicon.ico' )
})()
