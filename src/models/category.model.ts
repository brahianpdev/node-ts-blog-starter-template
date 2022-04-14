import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Category = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Category", Category);
