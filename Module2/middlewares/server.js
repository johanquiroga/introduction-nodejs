// Imports
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Instantiations
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})

app.use((req, res, next) => {
    if (req.query.api_key) {
        next()
    } else {
        res.status(401).send({msg: 'Not authorized'})
    }
})

// Routes
app.get('/', (req, res) => {
    res.send({msg: 'hello world'})
})

app.get('/accounts', (req, res, next) => {
    console.log('accounts inline middleware')
    next(new Error('oopps'))
}, (req, res) => {
    res.send({msg: 'accounts'})
})

app.post('/transactions', (req, res) => {
    console.log(req.body)
    res.send({msg: 'transactions'})
})

// Error handlers
app.use((error, req, res, next) => {
    res.status(500).send(error)
})

// Bootup
app.listen(3000)
