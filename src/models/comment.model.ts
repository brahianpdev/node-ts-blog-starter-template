import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Comment", Comment);
