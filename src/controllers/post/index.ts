import  express  from "express";
const Post = require('../../models/post');
interface Post {
    title: String,
    shortDescription: String,
    paragraph: String
}
const create = (req: express.Request, res: express.Response) => {
    const newPost = new Post(req.body)

    newPost
    .save()
    .then((post: Post) => {
        return res.status(201).json(post);
    }).catch((err: Error) => res.status(400).json(err));
}

const getAll = async (req: express.Request, res: express.Response) => {
    const posts = await Post.find({})
    return res.send(posts)
}

module.exports = { create, getAll }