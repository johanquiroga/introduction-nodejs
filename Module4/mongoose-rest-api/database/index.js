var mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/edx-course-db', {useMongoClient: true})

require('./models/account.js')
