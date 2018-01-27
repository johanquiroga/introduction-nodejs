const path = require('path')

module.exports = {
    toJson: (data) => {
        try {
            return JSON.parse(data)
        } catch (error) {
            console.error(`Got error parsing data: ${error}`)
            return process.exit(1)
        }
    },

    split: (data, chunkSize) => {
        let chunks = []
        let dataSize = data.length

        for (let i = 0; i < Math.ceil(dataSize / chunkSize); i++) {
            chunks.push(data.slice(i*chunkSize, (i + 1) * chunkSize))
        }

        return chunks
    },

    mergeData: (srcArray = []) => {
        let result = {}
        srcArray.forEach((src) => {
            Object.assign(result, src)
        })

        return result
    },

    parseArgs: () => {
        // Receive number of chunks from CLI arguments
        let nChunks = 50
        let argsFilesIndex = 3

        if (process.argv[2] !== undefined) {
            if (/^\d+$/.test(process.argv[2])) {
                nChunks = parseInt(process.argv[2])
            } else {
                argsFilesIndex = 2
            }
        }

        // Get files from CLI arguments
        let files = process.argv.splice(argsFilesIndex, process.argv.length - argsFilesIndex)

        if (files.length == 0) {
            files = [path.join(process.cwd(), 'data', 'm3-customer-data.json'), path.join(process.cwd(), 'data', 'm3-customer-address-data.json')]
        }

        return { nChunks, files }
    }
}
