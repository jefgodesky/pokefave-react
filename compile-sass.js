const fs = require('fs')
const sass = require('sass')

const result = sass.compile('./src/scss/style.scss')
fs.writeFileSync('./public/style.css', result.css)
