import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  BASE_URL,
  MONGO_URL,
  JWT_SECRET,
  JWT_EXPIRATION,
  NODEMAILER_HOST,
  NODEMAILER_SERVICE,
  NODEMAILER_USER,
  NODEMAILER_PASSWORD,
  NODEMAILER_SENDMAIL_TO,
} = process.env;

const enviromentConfig = {
  app: {
    port: PORT,
    url: BASE_URL,
  },
  db: {
    mongoURL: MONGO_URL,
  },
  jwt: {
    secret: JWT_SECRET,
    expiration: JWT_EXPIRATION,
  },
  nodemailer: {
    host: NODEMAILER_HOST,
    service: NODEMAILER_SERVICE,
    user: NODEMAILER_USER,
    password: NODEMAILER_PASSWORD,
    sendTo: NODEMAILER_SENDMAIL_TO,
  },
};

export default enviromentConfig;
