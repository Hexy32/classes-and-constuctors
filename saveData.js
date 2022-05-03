var fs = require('fs')

export function saveData(newData) {
  fs.writeFileSync('data.txt', newData)
}
