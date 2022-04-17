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
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post_date: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("Post", Post);
