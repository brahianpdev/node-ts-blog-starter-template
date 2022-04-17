import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  nickname: {
    type: String,
    required: true, 
  },
  avatar: {
    type: String,
    required: false,
    default: "https://media.redadn.es/imagenes/animanga-0_342458_pn2.jpg",
  },
  role: {
    type: String,
    required: false,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
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
  created_at: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("User", User);
