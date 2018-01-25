// Imports
const express = require('express')
// Instantiations
const app = express()

// Configurations

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send({msg: 'hello world'})
})

// Error handlers

// Bootup
app.listen(3000)
