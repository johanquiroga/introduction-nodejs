# REST API

This is a RESTful API using express and mongoose with the following endpoints:

| **Method** |              **Endpoint**       |            **Description**                                          |
|:----------:|:--------------------------------|:--------------------------------------------------------------------|
|    GET     | `/accounts`                     | Get all accounts                                                    |
|    GET     | `/accounts?id=<accountId>`      | Get a specific account, accountId must be a mongoose valid ObjectId |
|    POST    | `/accounts`                     | Create a new account                                                |
|    PUT     | `/accounts/:accountId`          | Update an existing account                                          |
|   DELETE   | `/accounts/:accountId`          | Delete an account                                                   |

1. I followed the recommendations given and used the packages mentioned.
Also I decided to implement some custom middlewares that checked if the resource that is being requested exists. For this I used a similar strategy as for the routes, created a `middlewares` folder with an `index.js` that would import and expose via exports all the middlewares defined. To setup the mongoose connection to database I created the folder `database` in which the connection is made in `index.js` and the models and schemas are defined in their respective folders.
1. To test that my server would work as expected I setup calls to every endpoint with Postman [![Tests here](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9f14314d15515d7d6644)
1. According to the tests, which were manually verified, the server does work as expected.
