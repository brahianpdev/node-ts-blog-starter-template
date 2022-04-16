import multer from "multer";
import storage from "../configuration/cloudinaryConfig";
import fileTypesFilter from '../utils/file-types-filter';

const upload = multer({ storage: storage, fileFilter: fileTypesFilter });

export default upload;
