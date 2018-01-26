let store = require('../store')

module.exports = {
    getComments(req, res) {
        if (req.query.commentId) {
            return res.status(200).send(store.posts[req.params.postId].comments[req.query.commentId])
        }

        res.status(200).send(store.posts[req.params.postId].comments)
    },
    addComment(req, res) {
        let newComment = {
            text: req.body.text
        }
        let commentId = store.posts[req.params.postId].comments.length
        store.posts[req.params.postId].comments.push(newComment)
        res.status(201).send({commentId: commentId})
    },
    updateComment(req, res) {
        let updatedComment = {
            text: req.body.text
        }
        store.posts[req.params.postId].comments[req.params.commentId] = updatedComment
        res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
}
