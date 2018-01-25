// Imports
const express = require('express')
const bodyParser = require('body-parser')

// Instantiations
const app = express()

let profile = [{
    username: 'azat',
    email: '[reducted]',
    url: 'http:azat.co'
}]

// Middlewares
app.use(bodyParser.json())

// Routes
app.get('/profile', (req, res) => {
    if (req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
})

app.post('/profile', (req, res) => {
    profile.push(req.body)
    console.log('created', profile)
    res.sendStatus(201)
})

app.put('/profile/:id', (req, res) => {
    Object.assign(profile[req.params.id], req.body)
    console.log('updated', profile[req.params.id])
    res.sendStatus(204)
})

app.delete('/profile/:id', (req, res) => {
    profile.splice(req.params.id, 1)
    console.log('deleted', profile)
    res.sendStatus(204)
})

// Error handlers

// Bootup
app.listen(3000)
