import * as mongoose from 'mongoose';

export interface Post extends mongoose.Document {
    title: string; 
    shortDescription: string;
    paragraph: string;
};

const PostSchema = new mongoose.Schema({
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

const Post = mongoose.model<Post>('Post', PostSchema);
export default Post;