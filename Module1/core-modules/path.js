/**
 * Create a path to app/server.js
 */
const path = require('path')

// Relative path
const relativeServer = path.join('app', 'server.js')
console.log(relativeServer)
// const server = require(relativeServer)

// Absolute path
const absoluteServer = path.join(__dirname, 'app', 'server.js')
console.log(absoluteServer)
// const server = require(absoluteServer)
