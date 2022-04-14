import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  categories: {
    type: [String],
    ref: "Category",
  },
  comments: {
    type: [String],
    ref: "Comment",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Post", Post);
