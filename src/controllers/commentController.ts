import { Request, Response } from 'express';
import Comment from '../models/comment';
import Blog from '../models/blog';

export class CommentController {
    async getComments(req: Request, res: Response) {
        const comments = await Comment.find({}).populate('post')
        res.json(comments)
    };
    async addComment(req: Request, res: Response) {
        const comment = new Comment({
            comment: req.body.comment,
            post: req.body.post
        })
        const blog = await Blog.findById(req.body.post)
        blog.comments = blog.comments.concat(comment._id)
        await blog.save()
        comment.save()
        .then(result => {
            res.json(result)
        })
        .catch((err: Error) => {
            console.log(err)
        });
    };
}