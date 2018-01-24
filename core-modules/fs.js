/**
 * Asycn read of a file
 */
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, '/data/customers.csv'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})

/**
 * Write to a file
 */
fs.writeFile('message.txt', 'Hello World!\n', function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
})
