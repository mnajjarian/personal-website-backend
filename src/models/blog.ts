import { Schema, Document, model } from "mongoose";
import { IComment } from "./comment";

export interface Blog extends Document {
  content: string;
  user: string;
  comments: IComment[];
  draft: boolean;
}

const BlogSchema = new Schema(
  {
    content: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    draft: {
      type: Boolean,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
BlogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Blog = model<Blog>("Blog", BlogSchema);

export default Blog;
