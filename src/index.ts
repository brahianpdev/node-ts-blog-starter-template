import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import compression from "compression";

import enviromentConfig from "./configuration/enviromentConfig";
import indexRoutes from "./routes/index.routes";

mongoose
  .connect(enviromentConfig.db.mongoURL)
  .then(() => {
    const app = express();

    app.use(
      express.urlencoded({
        extended: true,
      })
    );

    app.use(
      compression({
        level: 9,
      })
    );

    app.use(cookieParser());
    app.use(express.json());
    app.use(morgan("tiny"));
    app.use(helmet());
    app.use(cors());

    app.use(
      session({
        secret: "SECRET",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
      })
    );

    app.use("/", indexRoutes);

    app.listen(enviromentConfig.app.port, () => {
      console.log(`🔥 Server is running at port ${enviromentConfig.app.port}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
