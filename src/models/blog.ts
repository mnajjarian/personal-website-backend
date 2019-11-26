import { Schema, Document, model } from "mongoose";

export interface Blog extends Document {
  content: string;
  author: string;
}

const BlogSchema = new Schema(
  {
    content: {
      type: String
    },
    author: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);
BlogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id
    delete returnedObject.__v
  }
});
const Blog = model<Blog>("Blog", BlogSchema);

export default Blog;
