import  { Request, Response }  from "express";
import Post from '../models/post';

interface Post {
    title: string;
    shortDescription: string;
    paragraph: string;
}

export class BlogController {
    async getPosts(_: Request, res: Response): Promise<import('express-serve-static-core').Response> {
        const posts = await Post.find({});
        return res.send(posts)
    }
    async create(req: Request, res: Response): Promise<void> {
        const newPost = new Post(req.body)
        newPost
          .save()
          .then((post: Post) => {
              return res.status(201).json(post);
        }).catch((err: Error) => res.status(400).json(err));
    }

}