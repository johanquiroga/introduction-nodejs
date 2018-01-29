const mongoose = require('mongoose')

var schema = module.exports = mongoose.Schema({
    name: {type: String, required: true},
    balance: {type: Number, required: true, min: 0}
})
