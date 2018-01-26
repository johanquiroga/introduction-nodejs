const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

const routes = require('./routes')
const middlewares = require('./middlewares')

let app = express()
let store = require('./store')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/posts', middlewares.posts, routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', middlewares.posts, routes.posts.updatePost)
app.delete('/posts/:postId', middlewares.posts, routes.posts.removePost)

app.get('/posts/:postId/comments', [middlewares.posts, middlewares.comments], routes.comments.getComments)
app.post('/posts/:postId/comments', middlewares.posts, routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', [middlewares.posts, middlewares.comments], routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', [middlewares.posts, middlewares.comments], routes.comments.removeComment)

app.listen(3000)
