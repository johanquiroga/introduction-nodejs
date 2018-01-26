# RESTful Blog API

This is a basic Blog RESTful API with the following endpoints:

| **Method** |              **Endpoint**                       |            **Description**              |
|:----------:|:-----------------------------------------------:|:----------------------------------------|
|    GET     | `/posts`                                        | Get all posts                           |
|    GET     | `/posts?postId=<postId>`                        | Get a specific post                     |
|    POST    | `/posts`                                        | Create a new Blog post                  |
|    PUT     | `/posts/:postId`                                | Update an existing post                 |
|   DELETE   | `/posts/:postId`                                | Delete a post                           |
|    GET     | `/posts/:postId/comments`                       | Get all comments form a post            |
|    GET     | `/posts/:postId/comments?commentId=<commentId>` | Get a specific comment from a post      |
|    POST    | `/posts/:postId/comments`                       | Create a new comment for the given post |
|    PUT     | `/posts/:postId/comments/:commentId`            | Update a comment of a post              |
|   DELETE   | `/posts/:postId/comments/:commentId`            | Delete a comment of a post              |

1.
  - I followed the recommendations given and used the proposed boilerplates for the routes definitions.
  - I decided to implement some custom middlewares that checked if the resource that is being requested exists, to avoid crashings of the server. For this I used a similar strategy to the routes, created a  `middlewares` folder with an `index.js` that would import and expose via exports all the middlewares defined.
  - The main problem that I had was with the custom middlewares. The problem was that I first tried to register them using `app.use(middleware)`. But these particular middlewares would require access to the URL Parameters, and middlewares registered in that way do not have access to said request property since it is obtained from parsing the current request url. Finally, the only solution I could find these registers inline on every request handler that would need them.
2. To test that my server would work as expected I setup calls to every endpoint with Postman [![Test here](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ba5d9df1720179ba4394).
3. According to the tests, which were manually verified, the server does work as expected.
