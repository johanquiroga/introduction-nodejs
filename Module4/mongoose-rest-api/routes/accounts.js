var mongoose = require('mongoose')
let Account = mongoose.model('Account')

module.exports = {
    get(req, res) {
        var query = Account.find({})

        if (req.query.id) {
            var query = Account.findById(req.query.id)
        }

        query.exec((error, result) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            return res.status(200).send(result)
        })
    },

    post(req, res) {
        let newAccount = new Account({
            name: req.body.name,
            balance: req.body.balance
        })

        newAccount.save((error, result) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            return res.status(201).send({accountId: newAccount.id})
        })
    },

    put(req, res) {
        Account.findById(req.params.id, (error, doc) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            doc.name = req.body.name ? req.body.name : doc.name
            doc.balance = req.body.balance ? req.body.balance : doc.balance

            doc.save((error, result) => {
                if (error) {
                    console.error(error)
                    return res.status(500).send(error.message)
                }

                return res.status(200).send(result)
            })
        })
    },

    delete(req, res) {
        Account.findById(req.params.id, (error, doc) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            doc.remove((error, result) => {
                if (error) {
                    console.error(error)
                    return res.status(500).send(error.message)
                }

                return res.status(200).send(result)
            })
        })
    }
}
