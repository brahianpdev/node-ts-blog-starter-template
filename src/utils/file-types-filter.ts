import { Request } from "express";

const fileTypesFilter = (
  req: Request,
  file: { mimetype: string | string[] },
  cb: (arg0: any, arg1: boolean) => void
) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default fileTypesFilter;
