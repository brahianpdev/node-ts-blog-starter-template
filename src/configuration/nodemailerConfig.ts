import nodemailer from "nodemailer";
import enviromentConfig from "./enviromentConfig";

export const transporter = nodemailer.createTransport({
  host: enviromentConfig.nodemailer.host,
  port: 465,
  secure: true,
  auth: {
    user: enviromentConfig.nodemailer.user,
    pass: enviromentConfig.nodemailer.password,
  },
});

transporter.verify().then(() => {
  console.log("Server is ready to take our messages");
});
