import { Request, Response } from 'express';
import Comment, { IComment } from '../models/comment';
import Blog from '../models/blog';

export class CommentController {
    async getComments(req: Request, res: Response): Promise<void> {
        const comments = await Comment.find({}).populate('post')
        res.json(comments)
    };
    async addComment(req: Request, res: Response): Promise<void> {
        const comment: IComment = new Comment(req.body)
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
    async removeComment(req: Request, res: Response): Promise<void> {
        await Comment.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch((err: Error) => {
            console.log(err)
        });
    }
}