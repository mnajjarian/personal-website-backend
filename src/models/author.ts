import * as mongoose from 'mongoose';

const Author = new mongoose.Schema({
    author: {
        type: String,
    },
    authorImg: {
        type: String,
    },
    authorBio: {
        type: String,
    },
})

module.exports = mongoose.model('Author', Author);