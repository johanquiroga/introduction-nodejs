const fs = require('fs')
const { toJson, mergeData } = require('./utils.js')

module.exports = (files = []) => {
    let filesData = []
    let result = []

    files.forEach((file, index) => {
        filesData[index] = toJson(fs.readFileSync(file, 'utf8'))
    })

    filesData.forEach((fileData) => {
        fileData.forEach((data, i) => {
            result[i] = mergeData([result[i], data])
        })
    })

    return result
}
