const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "YOU CLOUD NAME",
  api_key: "YOU API KEY",
  api_secret: "YOU API SECRET",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

export default storage;
