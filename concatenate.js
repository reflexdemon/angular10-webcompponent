const fs = require('fs-extra');
const concat = require('concat');
const target = 'docs';
(async function build() {
  const files = [
    './dist/angular10-webcompponent/main.js',
    './dist/angular10-webcompponent/polyfills.js',
    './dist/angular10-webcompponent/runtime.js',
  ]
  await fs.ensureDir(`${target}`)
  console.log(`Merging all JS files to ${target}/analytics-counter.js`)
  await concat(files, `${target}/analytics-counter.js`);
  console.log(`Merging all Styles to ${target}/styles.css`)
  await fs.copyFile('./dist/angular10-webcompponent/styles.css', `${target}/styles.css`)
  console.log(`Merging all Third party licenses to ${target}/3rdpartylicenses.txt`)
  await fs.copy('./dist/angular10-webcompponent/3rdpartylicenses.txt', `${target}/3rdpartylicenses.txt` )
  console.log(`Copy your favicon.ico if you like :)`)
  await fs.copy('./dist/angular10-webcompponent/favicon.ico', `${target}/favicon.ico` )
})()
