/**
 * Create a path to app/server.js
 */
const path = require('path')

// Relative path
const server = require(path.join('app', 'server.js'))
// Absolute path
const server = require(path.join(__dirname, 'app', 'server.js'))
