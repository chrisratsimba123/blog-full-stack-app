const mongoose = require('mongoose')
const Schema = mongoodse.Schema

const Post = new Schema(
    {
        title: { type: String, required: true },
        imgURL: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true }
    }, 
    { timestamps: true }
)

module.exports = mongoose.model('posts', Post)