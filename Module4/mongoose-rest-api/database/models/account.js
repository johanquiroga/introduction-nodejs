var mongoose = require('mongoose')

var schema = require('../schemas/account.js')

var Account = module.exports = mongoose.model('Account', schema)
