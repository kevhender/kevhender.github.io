
const fs = require('fs')

const main = () => {
  fs.writeFileSync('build/test.js', `test: ${new Date()}`, 'utf8')
}

main()
