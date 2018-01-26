let store = require('../store')

module.exports = (req, res, next) => {
    if (req.params.commentId) {
        if (!store.posts[req.params.postId].comments[req.params.commentId]) {
            res.status(404).send('Comment not found')
        }

        next()
    }

    if (req.query.commentId) {
        if (!store.posts[req.params.postId].comments[req.query.commentId]) {
            res.status(404).send('Comment not found')
        }

        next()
    }

    next()
}
