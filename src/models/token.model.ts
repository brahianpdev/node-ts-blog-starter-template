import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Token = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Token", Token);