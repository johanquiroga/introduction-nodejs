// Imports
const express = require('express')
const bodyParser = require('body-parser')

// Instantiations
const app = express()

let profile = {
    username: 'azat',
    email: '[reducted]',
    url: 'http:azat.co'
}

// Middlewares
app.use(bodyParser.json())

// Routes
app.get('/profile', (req, res) => {
    res.send(profile)
})

app.post('/profile', (req, res) => {
    profile = req.body
    console.log('created', profile)
    res.sendStatus(201)
})

app.put('/profile', (req, res) => {
    Object.assign(profile, req.body)
    console.log('updated', profile)
    res.sendStatus(204)
})

app.delete('/profile', (req, res) => {
    profile = {}
    console.log('deleted', profile)
    res.sendStatus(204)
})

// Error handlers

// Bootup
app.listen(3000)
