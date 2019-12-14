import { Schema, model, Document } from 'mongoose';

export interface IComment extends Document {
    comment: string;
    post: string;
    commenter: string;
    email: string;
}
const CommentSchema: Schema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commenter: {
        type: String
    },
    email: {
        type: String
    },
    post: {
        type: Schema.Types.ObjectId, ref: 'Blog'
    }
},{
    timestamps: { createdAt: true, updatedAt: false }
})

const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;