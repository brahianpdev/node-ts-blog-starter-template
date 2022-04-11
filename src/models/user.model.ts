import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", User);
