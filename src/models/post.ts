import mongoose from 'mongoose';


const Post = new mongoose.Schema({
    title: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    paragraph: {
        type: String,
    },
})

module.exports = mongoose.model('Post', Post);