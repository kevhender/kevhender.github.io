
const fs = require('fs')

const main = () => {
  fs.writeFileSync('build/test.js', `test1: ${new Date()}`, 'utf8');
}

main()
