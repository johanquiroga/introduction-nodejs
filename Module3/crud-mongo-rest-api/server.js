// Imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'edx-course-db'
let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

mongodb.MongoClient.connect(url, (error, client) => {
    if (error) {
        console.log(`Failed to connect to the database. ${err.stack}`)
        return process.exit(1)
    }

    app.locals.db = client.db(dbName)

    app.get('/accounts', (req, res) => {
        const db = req.app.locals.db
        db.collection('accounts')
            .find({}, {sort: {_id: -1}})
            .toArray((error, accounts) => {
                if (error) {
                    return next(error)
                }

                res.send(accounts)
        })
    })

    app.post('/accounts', (req, res) => {
        const db = req.app.locals.db
        let newAccount = req.body
        db.collection('accounts').insert(newAccount, (error, results) => {
            if (error) {
                return next(error)
            }

            res.send(results)
        })
    })

    app.put('/accounts/:id', (req, res) => {
        const db = req.app.locals.db
        db.collection('accounts')
            .update({_id: mongodb.ObjectID(req.params.id)}, {$set: req.body}, (error, result) => {
                if (error) {
                    return next(error)
                }

                res.send(result)
        })
    })

    app.delete('/accounts/:id', (req, res) => {
        const db = req.app.locals.db
        db.collection('accounts')
            .remove({_id: mongodb.ObjectID(req.params.id)}, (error, results) => {
                if (error) {
                    return next(error)
                }

                res.send(results)
        })
    })

    app.listen(3000)
})
