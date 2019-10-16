import { Schema, Document, model } from 'mongoose';

export interface Post extends Document {
    title: string; 
    shortDescription: string;
    paragraph: string;
};

const PostSchema = new Schema({
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

const Post = model<Post>('Post', PostSchema);

export default Post;