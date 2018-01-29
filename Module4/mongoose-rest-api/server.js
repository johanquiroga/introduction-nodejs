const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

var db = require('./database')
const routes = require('./routes')
const middlewares = require('./middlewares')

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/accounts', middlewares.accounts, routes.accounts.get)

app.post('/accounts', routes.accounts.post)

app.put('/accounts/:id', middlewares.accounts, routes.accounts.put)

app.delete('/accounts/:id', middlewares.accounts, routes.accounts.delete)

app.listen(3000)
