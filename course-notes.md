# Nodejs

# Benefits
- Develop faster due to the vast number of modules and reusable code from npm
- Make fewer mistakes and be more productive (*One language across the stack*)
- Delight your user with fast response time (YMMV)
- Reduce team size and communication overhead (full stack JavaScript)
- Reduce dependency on other teams (e.g., backend API teams)
- Ability to re-use code on the browser and server
# Features
- Non-blocking I/O: performant
- Fast JS engine: browser arms race (Google Chrome V8 and Microsoft Chakra)
- Expressive and interpreted language: don't waste time on setup
- Solid and improving language standard (ECMAScript)
- Built in package manager with a humongous number of packages (npm)
# Downsides
- Memory leaks in long running processes with Node are worse than in short running browser environments such as browser JavaScript
- The event loop makes asynchronous error handling more difficult than synchronous error handling
- No benefit for CPU-bound tasks
- Need to think about scalability early on to develop stateless scalable distributed systems
- No built-in typing (but possible with TypeScript)
# Modern Web Development

front-end applications (single-page application) which connect to servers to submit or get data via JSON (or other formats). Here the servers acts like a middleman between the front-end application and the database or other services, also performs things the front cant (authentication, data validation, encryption, etc).

Node is used to implement the backend servers (often JSON RESTful APIs). Often the Express framework is often used to implement web applications in Node.


----------
# **Node.js**

Node is an interpreted language and environment, not a compiled one. There are three main way to launch Node code:
REPL (`node`)

1. Eval option (`node -e` `"``<Node/javascript here>``"`)
2. Launching Node code from a file
## `require` and `module.exports`
- With `module.exports` you can export anything you want, typically a function but it can be an object too. **Node.js cache imports** (code outside the export onyle runs once).
- With `require()` you can import anything that has been previously exported. It can be from a file (referencing with `./` or `../` or an absolute path) or an Node.js module or NPM module (referenced by its name)
## Core modules

This come with Node.js and don’t need to be installed. They provide low-level functionality and helper methods.

- `fs`: module to work with the file system, files and folders
- `path`: module to parse file system paths across platforms
- `querystring`: module to parse query string data
- `net`: module to work with networking for various protocols
- `stream`: module to work with data streams
- `events`: module to implement event emitters (Node observer pattern)
- `child_process`: module to spawn external processes
- `os`: module to access OS-level information including platform, number of CPUs, memory, uptime, etc.
- `url`: module to parse URLs
- `http`: module to make requests (client) and accept requests (server)
- `https`: module to do the same as http only for HTTPS
- `util`: various utilities including promosify which turns any standard Node core method into a promise-base API
- `assert`: module to perform assertion based testing
- `crypto`: module to encrypt and hash information

**`fs`**
Handles file system operations such as reading to and and writing from files.

- `fs.readFile()`: reads files asynchronously
- `fs.writeFile()`: writes data to files asynchronously

[Read Documentation](http://nodejs.org/api/fs.html)

**`path`**
Used to work with file and folder paths so that the code works seamlessly on any platform.

- `path.join()`: used to create paths that are platform independent

[Read Documentation](https://nodejs.org/api/path.html)

## Event Emitters

Is a core module to implement the observer pattern, which has the following: an observer, an event and an event emitter.
Flow:

1. A class is created with `class`
2. A class inherits from the EventEmitter class using `extends`
3. An instance of an object is created from the class with `new`
4. An observer (a.k.a. event listener) is created with `.on(eventName, eventHandler)`
5. An event is emitted with `emit()` and the event handler in the observer is executed.
![Event flow](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/67250b0282689b95adb9e97b137ef869/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/node-events.png)


[Documentation](https://nodejs.org/api/events.html)

## HTTP

Node provides a core module `[http](https://nodejs.org/api/http.html)` to make HTTP requests to other services. This modules uses the Event Emitter pattern. You get a small chunk of the overall response during each data event. You can process the data right away (for large data) or save it all together in a buffer variable (preferred for JSON).

![Process data as a stream (as it arrives)](https://d2mxuefqeaa7sj.cloudfront.net/s_9AADA8C9D6A83FD9A3263B0CDAEBE7088406B9D12B84B1D9B96A4F9E109484E6_1516807180424_node-streams.png)
![Process data with a buffer (wait for all data to arrive)](https://d2mxuefqeaa7sj.cloudfront.net/s_9AADA8C9D6A83FD9A3263B0CDAEBE7088406B9D12B84B1D9B96A4F9E109484E6_1516807176880_node-buffer.png)


The `http` core module methods allow you to specify what type of request you want to make. To do so, first create an `options` object and set the `method` attribute to the desired request type (‘POST’, 'GET', etc.), also you can specify other properties such as hostname, port, path, headers. Then, use the `options` object as the first argument when calling `http.request()`.
For creating a server read this [Documentation](https://nodejs.org/api/http.html#http_class_http_server).

### **HTTP Request**
The HTTP server request object (not the client request object) has all the information about the incoming request to our server. Here's the list of main properties:

- `request.headers`: Information about incoming requests headers such as Connection, Host, Authorization, etc (see list [here](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields))
- `request.method`: Information about the incoming requests methods such as GET, POST, PUT, DELETE, OPTIONS, HEAD, etc.
- `request.url`: Information about the incoming request URL, such as `/accounts`, `/users`, `/messages`, etc.

To process the request body, use tha same Event Emitter pattern as with the request client (listen to data event and collect in a buffer variable).

### **HTTP Response**
The [HTTP response](https://nodejs.org/api/http.html#http_class_http_serverresponse) is what enables us to send data back to the clients from our Node servers.
`response.writeHead` is a method that is used to set the status code and create HTTP headers.
The response itself is created with the `write()` method which adds data to the response. Another method is `end()` which finishes the response (which in turn will finish the incoming request). You can set the `statusCode` attribute to change the status code of the response (200, 400, 500, etc.).


----------
# What is npm?

Allows for seamless Node.js package management.
For example, to install a package called `superagent`:

1. In existing project, skip this step but in a new project, create a `package.json` first by running `npm init -y` to initialize the project.
2. In the project root folder (main folder), run `npm install superagent`
3. In a file where you want to use `superagent`, import it: `const superagent = require('superagent')`.
## There are two ways to install a module:
1. **Locally:** most of your projects' dependencies which you import with `require()`, e.g., `express`, `request`, `hapi`. They go into the `node_modules` directory of your local project

```bash
npm install module-name
npm i module-name
```

2. **Globally:** command-line tools only (mostly), e.g., `mocha`, `grunt`, `slc`. They go into `/usr/local`

```bash
npm install --global module-name
npm i -g module-name
```

Also you can specify versions: 

- Exact version installation:

```bash
npm install express@4.2.0
```

- Latest version installation, which can be useful when you already have this module but want to upgrade to the latest module:

```bash
npm install express@latest
```

Semantic versioning consists of using three digits which have certain meaning. For example, in semver 4.2.0, 4 is major, 2 is minor and 0 is patch. Major is for major releases which most often break existing code. Minor are for small releases which can break some code but most often are okay. Patch is for small fixes which should not change the main interface and *should* not break your applications.

## **Listing and Removing Modules**
- To list what modules are installed, run `npm ls` from your root project location.
- To list all globally installed modules, run `npm ls -g`.
- To remove an npm module use the `rm` command: `npm rm mysql`
- To remove a global module, apply the global flag: `npm rm mysql -g`


----------
# Express Framework

Express.js is a web framework based on the core Node.js `http` module and [Connect](http://www.senchalabs.org/connect) components. The components are called *middleware* and they are the cornerstones of the framework philosophy *configuration over convention, i.e.* Express.js systems are highly configurable, which allows developers to freely pick whatever libraries they need for a particular project.

Express is the most popular web application framework for Node. It is easy to work with since it ties into Node's functional paradigm. Some of the benefits of Express include:

- Deliver static content
- Modularize business logic
- Construct an API
- Connect to various data sources (with additional plugins)
- Write less code
- Validate data (with additional plugins)
- Parsing of HTTP request bodies, cookies, URL params and query strings
- Managing sessions
- Automatic response headers
- Authentication, validation, session
## **Express Project Structure**

Recommended Express project structure:

- `app.js || server.js || index.js`: main file, houses the embedded server and application logic
- `/public`: contains static files to be served by the embedded server
- `/routes`: houses custom routing for the REST API servers (not needed for a web app)
- `/routes/users.js`: endpoint/routes for resources such as users
- `/views`: contains templates that can be processed by a template engine (not needed for REST APIs)
- `/package.json`: project manifest
- `/www`: boot up script folder

Note: a web app is a traditional web application (thick server) with 100% server-side rendering while a REST API is a data only server (rendering happens and UI is hosted on the clients)

## Main Express app

It has the following sections in order top-bottom:

1. Imports
2. Instantiations
3. Configurations
4. Middleware
5. Routes
6. Error handlers
7. Server bootup or server export
## Configuring Express server

None of the configurations are mandatory. Configuration is defined (set) via the `set` method where the first argument is the name and the second is the value:

```javascript
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 3000)
app.set('views', 'templates') // The directory the templates are stored in
app.set('view engine', 'jade')
```
## Middleware

The Middleware pattern is a series of processing units connected together, where the output of one unit is the input for the next one.  The middleware pattern implements continuity. The request is coming from a client and a response is sent back to the client.


    request->middleware1->middleware2->...middlewareN->route->response

The middlewares are executed in the order specified.
There are two types of middlewares: 

1. npm modules, e.g., `body-parser` from npm used with `app.use(bodyParser.json())`
2. Custom middleware, e.g., `app.use((req, res, next)=>{next()})`

### **Passing References**
`request` is **always** the same object in the lifecycle of a single client request to the Express server. This allows us to implement a very useful pattern in which developers pass data from one middleware to another and to a request handler.

### **Request Body**
There's body-parser npm module which allows to access the request body information. Just install `body-parser` and enable the `json()` and `urlencoded()` middleware to convert raw form data into JSON.


    app.use(bodyParser.json())

Usage: AJAX/XHR from single-page applications and other JSON REST clients.


    app.use(bodyParser.urlencoded({extended: false}))

Usage: HTML web forms with `action` attribute.

**Useful middlewares from npm**

- [body-parser](https://github.com/expressjs/body-parser) request payload
- [compression](https://github.com/expressjs/compression) gzip
- [connect-timeout](https://github.com/expressjs/timeout) set request timeout
- [cookie-parser](https://github.com/expressjs/cookie-parser) Cookies
- [cookie-session](https://github.com/expressjs/cookie-session) Session via Cookies store
- [csurf](https://github.com/expressjs/csurf) CSRF
- [errorhandler](https://github.com/expressjs/errorhandler) error handler
- [express-session](https://github.com/expressjs/session) session via in-memory or other store
- [method-override](https://github.com/expressjs/method-override) HTTP method override
- [morgan](https://github.com/expressjs/morgan) server logs
- [response-time](https://github.com/expressjs/response-time)
- [serve-favicon](https://github.com/expressjs/serve-favicon) favicon
- [serve-index](https://github.com/expressjs/serve-index)
- [serve-static](https://github.com/expressjs/serve-static) static content
- [vhost](https://github.com/expressjs/vhost): virtual host
- [cookies](https://github.com/jed/cookies) and [keygrip](https://github.com/jed/keygrip): analogous to `cookieParser`
- [raw-body](https://github.com/stream-utils/raw-body): raw request body
- [connect-multiparty](https://github.com/superjoe30/connect-multiparty), [connect-busboy](https://github.com/mscdex/connect-busboy): file upload
- [qs](https://github.com/visionmedia/node-querystring): analogous to `query`
- [st](https://github.com/isaacs/st), [connect-static](https://github.com/andrewrk/connect-static) analogous to `staticCache`
- [express-validator](https://github.com/ctavan/express-validator): validation
- [less](https://github.com/emberfeather/less.js-middleware): LESS CSS
- [passport](https://github.com/jaredhanson/passport): authentication library
- [helmet](https://github.com/evilpacket/helmet): security headers
- [connect-cors](http://github.com/antono/connect-cors): CORS
- [connect-redis](http://github.com/visionmedia/connect-redis)
- [See more here](https://github.com/azat-co/cheatsheets/tree/master/express4)
## REST API Routing
- `app.post()`: POST requests are used for creation of new entities
- `app.put()`: PUT requests are used for complete replacements or partial updates
- `app.patch()`: PATCH requests are used for partial updates
- `app.delete()`: DELETE requests are used for removal of existing entities
- `app.head()`: HEAD requests are idential to GET requests but without the body
- `app.options()`: OPTIONS requests are used to identify allowed methods
## Express Request
- `request.params`: URL parameters
- `request.query`: query string parameters
- `request.route`: current route as a string
- `request.cookies`: cookies, requires cookieParser
- `request.signedCookies`: signed cookies, requires cookie-parser
- `request.body`: body/payload, requires body-parser
- `request.headers`: headers

**Header Shortcuts**

- `request.get(headerKey)`: value for the header key
- `request.accepts(type)`: checks if the type is accepted
- `request.acceptsLanguage(language)`: checks language
- `request.acceptsCharset(charset)`: checks charset
- `request.is(type)`: checks the type
- `request.ip`: IP address
- `request.ips`: IP addresses (with trust-proxy on)
- `request.path`: URL path
- `request.host`: host without port number
- `request.fresh`: checks freshness
- `request.stale`: checks staleness
- `request.xhr`: true for AJAX-y requests
- `request.protocol`: returns HTTP protocol
- `request.secure`: checks if protocol is https
- `request.subdomains`: array of subdomains
- `request.originalUrl`: original URL
## Express Responses
- `response.redirect(url)`: redirect request
- `response.send(data)`: send response
- `response.json(data)`: send JSON and force proper headers
- `response.sendfile(path, options, callback)`: send a file
- `response.render(templateName, locals, callback)`: render a template
- `response.locals`: pass data to template
- `response.status(statusCode)`: specify a status code
## URL Parameters

To access URL parameters such as for IDs, names or other information, define the parameter in the URL pattern string with a colon `:` and then access the parameter with `req.params`.
Example:
**Request**: GET /users/572611d856b11dcec61651bb
**Request Handler**: `/users/:id` => `req.params.id`

## Query String Data

In Express, query string data can be accessed by `req.query.name` where name is the key of the value in a query string. For example, an URL query string value `http://webapplog.com/search?term=node.js&page=1` can be accessed with `req.query.term` and `req.query.page` in a request handler such as `app.get()`


----------
# MongoDB

NoSQL databases, also called *non-relational__databases*, are more horizontally scalable, usually open source, and better suited for distributed systems. NoSQL databases deal routinely with larger data sizes than traditional ones. The key distinction in implementation comes from the fact that relationships between database entities are not stored in the database itself, they are moved to the application or object-relational and object-document mapping (ORM and ODM).

Another good reason to use NoSQL databases they are perfect for prototyping and for Agile iterations (they are schema-less).

MongoDB is a document store NoSQL database. In addition to efficiency, scalability, and lightning speed, MongoDB uses JavaScript–like language for its interface

## C.A.P. theorem
- **C**onsistency (strong vs. eventual-delay)
- **A**vailability
- **P**artition tolerance (on cluster)

The theorem says you cannot have all three but you can have any two of them. In SQL databases you get C+A but in NoSQL databases you get A+P. AP allows for better scaling across multiple partitions but not all data will be consistent at all the times.

## No SQL

Key characteristics of NoSQL (such as MongoDB):

- A+P from C.A.P.
- No relationships in the database.
- Redundancy is okay and sometime even good.

**Types of NoSQL databases**

- Key-value stores (Redis, think hash tables)
- Document stores (mongoDB, think JSON) → great at being distributed and scaling.
- Columnar stores (hbase, average age)
- Graphs stores (neo4j)
## SQL vs NoSQL

Relation DB->normilized for any query, no biases
NoSQL->biases to specific query patterns that we have

## MongoDB Shell (mongo)

To test the database, use the JavaScript-like interface and commands such as save and find:

    > db.test.save({a:1})
    > db.test.find()

Some useful MongoDB Shell commands to know:

- `> help`: List of available Mongo shell commands
- `> show dbs`: List all the databases in this DB server/instance
- `> use board`: Work on a specific database named `board`
- `> show collections`: List all collections in this database
- `> db.messages.remove();`: Remove all documents from `messages` collection
- `> var a=db.messages.findOne();`
- `> print json(a);`
- `> a.message="hi";`
- `> db.messages.save(a);`: Save method
- `> db.messages.find({});`: A read query
- `> db.messages.update({name:"John"},{$set:{message:"bye"}});`: An update documents query
- `> db.messages.find({name:"John"});`: A read query with a specific condition/query which matches only documents with property `name`which equals to value `John`
- `> db.messages.remove({name:"John"});`: A remove query with a condition
## MongoDB Native Driver (mongodb)

*Note: Some important information can be found* [*here*](https://stackoverflow.com/questions/47662220/db-collection-is-not-a-function-when-using-mongoclient-v3-0/47662979#47662979) *and* [*here*](https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application/14464750#14464750)


----------
# Mongoose

Is a fully developed **object-document mapping (ODM)** library for Node.js and MongoDB. ODMs are a crucial piece of modern software engineering.

## Why use Mongoose

It abstracts everything from the database, and the application code interacts only with objects and their methods. ODM also allows you to specify relationships between different types of objects and allows you to put business logic (related to those objects) inside classes.
In addition, it has built-in validation and type casting that can be extended and customized according to your needs. When used together with Express.js, Mongoose makes the stack truly adherent to the MVC concept.

## Basics
-  Mongoose can connect to the database server in one line. Mongoose requests are buffered, so we don’t have to wait for the established connection (no required callback). To do this, just call `mongoose.connect(uri(s), [options], [callback])`.
- The uniform resource identifier (URI) or connection string is the only required parameter, and it follows a standard format of `type://username:password@host:port/database_name`.
- To create a document that respresents a particular instance of a model:
    let Book = mongoose.model('Book', { name: String })
    let practicalNodeBook = new Book({ name: 'Practical Node.js' })
- Mongoose documents come with very convenient built-in methods ([see Documentation](http://mongoosejs.com/docs/api.html#document-js)) such as `validate`, `isNew`, `update`, and so on.
## Schemas

A Mongoose Schema is a JSON-ish class that has information about properties/field types of a document. It also can store information about validation and default values, and whether a particular property is required. Schemas can contain business logic and other important information. In other words, schemas serve as blueprints for documents. They are needed for model creation.

```javascript
const bookSchema = mongoose.Schema({
  name: String
})
```

Supported data types:

- `String`: a standard JavaScript/Node.js string (a sequence of characters) type
- `Number`: a standard JavaScript/Node number type up to 253 (64-bit); larger numbers with [mongoose-long](https://www.npmjs.org/package/mongoose-long), [Git](https://github.com/aheckmann/mongoose-long)
- `Boolean`: a standard JavaScript/Node Boolean type—true or false
- `Buffer`: a Node.js binary type (images, PDFs, archives, and so on)
- `Date`: an ISODate formatted date type, such as 2014-12-31T12:56:26.009Z
- `Array`: a standard JavaScript/Node array type
- `Schema.Types.ObjectId` a typical, MongoDB 24-character hex string of a 12-byte binary number (e.g., 52dafa354bd71b30fa12c441)
- `Schema.Types.Mixed`: any type of data (i.e., flexible free type)

Example: 

```javascript
const ObjectId = mongoose.Schema.Types.ObjectId,
  Mixed = mongoose.Schema.Types.Mixed
const bookSchema = mongoose.Schema({
  name: String,
  created_at: Date,
  updated_at: {type: Date, default: Date.now},
  published: Boolean,
  authorId : { type: ObjectId, required: true },
  description: { type: String, default: null },
  active: {type: Boolean, default: false},
  keywords: { type: [ String ], default: [] }
  description: {
    body: String,
    image: Buffer
  },
  version: {type: Number, default: function() {return 1;}},
  notes: Mixed,
  contributors: [ObjectId]
})
```

It’s also possible to create and use custom types (email, urls), see [mongoose-types](https://github.com/bnoguchi/mongoose-types)

## Custom Schema Types

Mongoose allows us to define/write getters (`get)`, setters (`set`), and defaults (`default`) right in the Schema! Same goes for validate and some other useful methods.

```javascript
const postSchema = new mongoose.Schema({
  slug: { 
    type: String, 
    set: function(slug) { 
      return slug.toLowerCase()
    }
  },
  numberOfLikes: {
    type: Number,
    get: function(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },  
  posted_at: { 
    type: String, 
    get: function(value) { 
      if (!value) return null;
      return value.toUTCString()
    }
  },  
  authorId: { 
    type: ObjectId, 
    default: function() { 
      return new mongoose.Types.ObjectId() 
    } 
  },
  email: { 
    type: String, 
    unique: true, 
    validate: [ 
      function(email) {
        return (email.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:<a href="?:[a-z0-9-]*[a-z0-9]" title="" target="_blank">a-z0-9</a>?\.)+<a href="?:[a-z0-9-]*[a-z0-9]" title="" target="_blank">a-z0-9</a>?/i) != null)}, 
      'Invalid email'
    ] 
  }
  })
```
   
Another approach:

1. Use `Schema.path(name)` to get `SchemaType` ([official docs](http://mongoosejs.com/docs/api.html#schema_Schema-path)).
2. Use `SchemaType.get(fn)` to set the getter method ([official docs](http://mongoosejs.com/docs/api.html#schematype_SchemaType-get)).

For example,

```javascript
userSchema.path('numberOfPosts')
  .get(function(value) {
    if (value) return value
    return this.posts.length
  })
```

*Note: Path is just a fancy name for the nested field name and its parent objects, for example if we have ZIP code (*`*zip*`*) as a child of* `*contact.address*` *such as* `*user.contact.address.zip, the*` *the* `*contact.address.zip*` *is a path.*

## Models

To compile a schema into a model, use `mongoose.model(name, schema)`—for example:

```javascript
let Book = mongoose.model('Book', bookSchema)
```

Models are used to create documents (actual data). To do so, call `new ModelName(data)`—for example:

```javascript
let practicalNodeBook = new Book({ name: 'Practical Node.js' })
let javascriptTheGoodPartsBook = new Book({ name: "JavaScript The Good Parts"})
```

**Model Methods**
For the complete list refer to [the official Documentation](http://mongoosejs.com/docs/api.html#model-js).
Static methods:

- `Model.create(data, [callback (error, doc)])`: creates a new Mongoose document and saves it to the database
- `Model.remove(query, [callback(error)])`: removes documents from the collection that match the query; when finished, calls `callback` with `error`
- `Model.find(query, [fields], [options], [callback(error, docs)])`: finds documents that match the query (as a JSON object); possible [to select fields](http://mongoosejs.com/docs/api.html#query_Query-select) and use [options](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find)
- `Model.update(query, update, [options], [callback(error, affectedCount, raw)])`: updates documents, similar to native `update`
- `Model.populate(docs, options, [callback(error, doc)])`: populates documents using references to other collections; an alternative to another approach described in the next section
- `Model.findOne(query, [fields], [options], [callback(error, doc)])`: finds the first document that matches the query
- `Model.findById(id, [fields], [options], [callback(error, doc)])`: finds the first element for which `_id` equals the `id`argument (cast based on the schema)
- `Model.findOneAndUpdate([query], [update], [options], [callback(error, doc)])`: finds the first document that matches the query (if present) and updates it, returning the document; uses `[findAndModify](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#findandmodify)`
- `Model.findOneAndRemove(query, [options], [callback(error, doc)])`: finds the first document that matches the query and removes it when returning the document
- `Model.findByIdAndUpdate(id, [update], [options], [callback(error, doc)])`: similar to `findOneAndUpdate` using only the ID
- `Model.findByIdAndRemove(id, [options], [callback(error, doc)])`: similar to `findOneAndRemove` using only the ID

Most used instance methods (more methods [here](http://mongoosejs.com/docs/api.html#document-js)):

- `doc.model(name)`: returns another Mongoose model
- `doc.remove([callback(error, doc)])`: removes this document
- `doc.save([callback(error, doc, affectedCount)])`: saves this document
- `doc.update(doc, [options], [callback(error, affectedCount, raw)])`: updates the document with `doc` properties, and `options`parameters, and then upon completion fires a callback with `error`, number of `affectedCount` and the database output
- `doc.toJSON([option])`: converts a Mongoose document to JSON (options are listed later)
- `doc.toObject([option])`: converts a Mongoose document to a plain JavaScript object (options are listed later)
- `isModified([path])`: true/false, respectively, if some parts (or the specific path) of the document are or are not modified
- `markModified(path)`: marks a path manually as modified which is useful for mixed (`Schema.Types.Mixed`) data types because they don't trigger the modified flag automatically
- `doc.isNew`: true/false, respectively, whether the document is new or not new
- `doc.id`: returns the document ID
- `doc.set(path, value, [type], [options])`: sets `value` at a `path`
- `doc.validate(callback(error))`: checks validation manually (triggered automatically before `save()`)

Options for `toObject()` and `toJSON()` are as follows:

- `getters`: true/false, calls all `getters` including path and virtual types
- `virtuals`: true/false, includes virtual `getters` and can override the `getters` option
- `minimize`: true/false, removes empty properties/objects (defaults to true)
- `transform`: transforms the function called right before returning the object

You can define customs static or instance methods with `schema.static({func1(), func2()})` or `schema.method({func1(), func2()})` respectively.

## Nested Documents

The decision of whether to use separate collections or nested documents is more of an architectural question, and its answer depends on usage. For example, if posts are used only in the context of users (their authors)—say, on the users’ profile pages—then it’s best to use nested documents. However, if the blog features multiple users’ posts that need to be queried independently of their user context, then separate collections fit better.

To implement nested documents, we can use the type `Schema.Types.Mixed` in Mongoose schemas (`Schema`, e.g., `bookSchema` or `postSchema`) or we can create a new schema for the nested document.

To create a new user document or to save a post to an existing user when working with a nested posts document, treat the `posts` property as an array and just use the `push` method from the JavaScript/Node.js API, or use the MongoDB `$push` operand (http://docs.mongodb.org/manual/reference/operator/update/push/).

## Relationships and Join with Population

Mongoose provides a feature called *population*. It allows us to fill certain parts of the document from a different collection. Let’s say we have `posts` and `users` collections. We can reference posts in the user schema:

```javascript
const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const userSchema = Schema({
  _id     : Number,
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
};

const postSchema = Schema({
  _creator: { type: Number, ref: 'User' },
  title: String,
  text: String
})

let Post  = mongoose.model('Post', postSchema)
let User = mongoose.model('User', userSchema)

User.findOne({ name: /azat/i }) //or .find({})
  .populate('posts')
//  .populate({     
//    path: 'posts',
//    select: 'title', //return only certain fields
//    match: {text: /node\.js/i}, //filter populated results by query
//    options: { limit: 10, sort: 'title' } //limit the number of posts
//  })
  .exec(function (err, user) {
    if (err) return handleError(err)
    console.log('The user has % post(s)', user.posts.length)
  })
```
