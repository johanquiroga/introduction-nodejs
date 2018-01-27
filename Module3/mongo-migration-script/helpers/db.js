module.exports = {
    insertDocuments: (db, collectionName, data, callback) => {
        const collection = db.collection(collectionName)
        collection.insert(data, (error, result) => {
            callback(error, result)
        })
    },

    updateDocument: (db, collectionName, data, filterData = {}, callback) => {
        const collection = db.collection(collectionName)

        collection.update(filterData, {$set: data}, (error, result) => {
            callback(error, result)
        })
    },

    removeDocuments: (db, collectionName, filterData = {}, callback) => {
        const collection = db.collection(collectionName)
        collection.remove(filterData, (error, result) => {
            callback(error, result)
        })
    },

    findDocuments: (db, collectionName, filterData = {}, callback) => {
        const collection = db.collection(collectionName)
        collection.find(filterData).toArray((error, docs) => {
            callback(error, docs)
        })
    }
}
