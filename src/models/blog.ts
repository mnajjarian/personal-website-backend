import { Schema, Document, model } from 'mongoose';

export interface Blog extends Document {
    title: string; 
    shortDescription: string;
    paragraph: string;
};

const BlogSchema = new Schema({
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

const Blog = model<Blog>('Blog', BlogSchema);

export default Blog;