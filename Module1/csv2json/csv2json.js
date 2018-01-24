const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const converter = csv()

const convertToJson = (csvPath = path.join(__dirname, 'customer-data.csv')) => {
    console.log('Converting', csvPath)

    let jsonData = {}
    let jsonFile = csvPath.substr(0, csvPath.lastIndexOf(".")) + ".json"

    converter.fromFile(csvPath)
        .on('end_parsed', (jsonObj) => {
            jsonData = JSON.stringify(jsonObj, null, 2)
        })
        .on('done', (error) => {
            if (error) return console.error(error)

            fs.writeFileSync(jsonFile, jsonData)
            console.log('conversion done in', jsonFile)
        }).on('error', (error) => {
            return console.error(error)
        })
}

convertToJson(process.argv[2])
