import { Schema, model, Document } from 'mongoose';

export interface Comment extends Document {
    comment: string
}
const CommentSchema = new Schema({
    comment: {
        type: String,
    },
    post: {
        type: Schema.Types.ObjectId, ref: 'Blog'
    }
})

const Comment = model<Comment>('Comment', CommentSchema);

export default Comment;