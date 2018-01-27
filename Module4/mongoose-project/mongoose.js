const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-course-db')

const bookSchema = mongoose.Schema({
    name: String,
    published: Boolean,
    createdAt: Date,
    updatedAt: {type: Date, default: Date.now},
    email: String,
    reviews: [mongoose.Schema.Types.Mixed]
})

bookSchema.virtual('authorPhotoUrl')
    .get(function() {
        if (!this.email) return null
        var crypto = require('crypto')
        email = this.email
        email = email.trim()
        email = email.toLowerCase()
        var hash = crypto
            .createHash('md5')
            .update(email)
            .digest('hex')
        var gravatarBaseUrl = 'https://secure.gravatar.com/avatar/'
        return gravatarBaseUrl + hash
    })

let Book = mongoose.model('Book', bookSchema)

let practicalNodeBook = new Book({
    name: 'Practical Node.js, 2nd Edition',
    author: 'Azat',
    email: 'quirogacj@gmail.com',
    link: 'https://github.com/azat-co/practicalnode',
    createdAt: Date.now()
})

practicalNodeBook.save((err, results) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log('Saved:', results)
        console.log('Book author photo:', practicalNodeBook.authorPhotoUrl)
        practicalNodeBook.remove(process.exit)
    }
})
