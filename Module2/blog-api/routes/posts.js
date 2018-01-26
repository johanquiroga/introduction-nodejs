let store = require('../store')

module.exports = {
    getPosts(req, res) {
        if (req.query.postId) {
            return res.status(200).send(store.posts[req.query.postId])
        }

        res.status(200).send(store.posts)
    },
    addPost(req, res) {
        let newPost = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: []
        }
        let postId = store.posts.length
        store.posts.push(newPost)
        res.status(201).send({postId: postId})
    },
    updatePost(req, res) {
        let updatedPost = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        Object.assign(store.posts[req.params.postId], updatedPost)
        res.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, res) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}
