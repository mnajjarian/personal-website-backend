import  { Request, Response }  from "express";
import Blog from '../models/blog';

interface Post {
    content: string;
}

export class BlogController {
    async getPosts(_: Request, res: Response): Promise<import('express-serve-static-core').Response> {
        const posts = await Blog.find({});
        return res.send(posts)
    }
    async create(req: Request, res: Response): Promise<void> {

        const newPost = new Blog({
            content: req.body.draft
        })
        console.log('req.body: ', req.body, 'newPost: ', newPost)
        newPost
          .save()
          .then((post: Post) => {
              return res.status(201).json(post);
        }).catch((err: Error) => res.status(400).json(err));
    }

}