const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-course-db')

const bookSchema = mongoose.Schema({ name: String })

bookSchema.method({
    buy(quantity, customer, callback) {
        var bookToPurchase = this
        console.log('buy')
        return callback()
    },
    refund(customer, callback) {
        // process the refund
        console.log('refund')
        return callback()
    }
})

bookSchema.static({
    getZeroInventoryReport(callback) {
        // run a query on all books and get the ones with zero inventory
        console.log('getZeroInventoryReport')
        let books = []
        return callback(books)
    },
    getCountOfBooksById(bookId, callback) {
        // run a query and get the number of books left for a given books
        console.log('getCountOfBooksById')
        let count = 0
        return callback(count)
    }
})

bookSchema.post('save', function(doc) {
    // prepare for saving
    console.log(doc)
    console.log('post save')
})

bookSchema.pre('remove', function(next) {
    // prepare for removing
    console.log('pre remove')
    return next()
})

let Book = mongoose.model('Book', bookSchema)
Book.getZeroInventoryReport(() => {})
Book.getCountOfBooksById(123, () => {})

let practicalNodeBook = new Book({name: 'Practical Node.js, 2nd Edition'})

practicalNodeBook.buy(1, 2, () => {})
practicalNodeBook.refund(1, () => {})

practicalNodeBook.save((err, results) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log('Saved:', results)
        practicalNodeBook.remove((error, results) => {
            if (error) {
                console.error(error)
                process.exit(1)
            } else {
                process.exit(0)
            }
        })
    }
})
