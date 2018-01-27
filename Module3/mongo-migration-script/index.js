const mongodb = require('mongodb')
const fs = require('fs')
const path = require('path')
const async = require('async')

const dbOps = require('./helpers/db.js');
const readFiles = require('./helpers/file.js')
const { split, parseArgs } = require('./helpers/utils.js')

// Connection url
const url = 'mongodb://localhost:27017'
const dbName = 'edx-course-db'
const collectionName = 'module3-assignment'

mongodb.MongoClient.connect(url, (error, client) => {
    var db = client.db(dbName)
    if (error) {
        return process.exit(1)
    }

    dbOps.removeDocuments(db, collectionName, {}, (error, result) => {
        if (error) {
            console.log(`Got error trying to truncate collection: ${error}`)
            return process.exit(1)
        }

        console.log(`Truncated collection '${collectionName}': ${result.result.n} documents removed`);
    })

    let { nChunks, files } = parseArgs()

    let data = split(readFiles(files), nChunks)

    let tasks = []
    data.forEach((batch, i) => {
        tasks.push((done) => {
            return dbOps.insertDocuments(db, collectionName, batch, done)
        })
    })

    async.parallel(tasks, (error, results) => {
        if (error) {
            console.error(`Got error in a parallel execution: ${error}`)
        }

        dbOps.findDocuments(db, collectionName, {}, (error, results) => {
            console.log(`${results.length} documents inserted in '${dbName}.${collectionName}'`)
            fs.writeFileSync(path.join(__dirname, 'result-customers-data.json'), JSON.stringify(results, null, 4))
            console.log(`Results saved in ${path.join(__dirname, 'result-customers-data.json')}`)
            client.close()
        })
    })
})
