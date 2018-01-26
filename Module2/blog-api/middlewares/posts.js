let store = require('../store')

module.exports = (req, res, next) => {
    if (req.params.postId) {
        if (!store.posts[req.params.postId]) {
            res.status(404).send('Post not found')
        }

        next()
    }

    if (req.query.postId) {
        if (!store.posts[req.query.postId]) {
            res.status(404).send('Post not found')
        }

        next()
    }

    next()
}
