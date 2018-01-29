var mongoose = require('mongoose')
let Account = mongoose.model('Account')

module.exports = (req, res, next) => {
    if (req.params.id) {
        Account.findById(req.params.id, (error, account) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            if (!account) {
                return res.status(404).send('Account not found')
            }

            return next()
        })
    } else if (req.query.id) {
        Account.findById(req.query.id, (error, account) => {
            if (error) {
                console.error(error)
                return res.status(500).send(error.message)
            }

            if (!account) {
                return res.status(404).send('Account not found')
            }

            return next()
        })
    } else {
        return next()
    }
}
