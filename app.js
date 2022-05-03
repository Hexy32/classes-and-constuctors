var fs = require('fs')

let hello = fs.readFileSync('readMe.txt', 'utf-8')

console.log(hello)
