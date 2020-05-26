import { Request, Response } from "express";
import Blog from "../models/blog";

interface BlogPost {
  _id: string;
  content: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
interface Post {
  content: string;
}
/* const blogFormat = (blog: BlogPost) => {
    console.log(blog)
    return {
        id: blog.id,
        content: blog.content,
        author: blog.author,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt
    }
} */

export class BlogController {
  getPosts(_: Request, res: Response): void {
    Blog.find({})
      .populate("comments")
      .populate("user", [
        "_id",
        "firstName",
        "lastName",
        "bio",
        "imageUrl",
        "title",
        "username",
      ])
      .exec((err, result) => {
        if (err) {
          console.log(err);
        }
        return res.json(result.map((post) => post));
      });
  }
  async create(req: Request, res: Response): Promise<void> {
    const newPost = new Blog({
      content: req.body.content,
      user: req.body.userId,
    });

    await newPost
      .save()
      .then((post: Post) => {
        return res.status(201).json(post);
      })
      .catch((err: Error) => res.status(400).json(err));
  }
  async updatePost(req: Request, res: Response): Promise<Response> {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.json({ Error: "malformated id" });
    }
    //const updatedPost = {...post, content: req.body };
    await Blog.findByIdAndUpdate(req.params.id, {
      content: req.body.content,
    }).then((post) => {
      return res.json(post.toJSON());
    });
  }
  removePost(req: Request, res: Response): void {
    Blog.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
