import { Schema, Document, model } from 'mongoose';
import { Timestamp } from 'bson';

export interface Blog extends Document {
    content: string;
};

const BlogSchema = new Schema({
    content: {
        type: String,
    }
},{
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})

const Blog = model<Blog>('Blog', BlogSchema);

export default Blog;