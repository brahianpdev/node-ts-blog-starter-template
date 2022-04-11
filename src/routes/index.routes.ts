import { Router } from "express";
const routes = Router();

import userRoutes from "./users.routes";
import authRoutes from "./authentication.routes";
import postsRoutes from "./posts.routes";

routes.use("/auth",  authRoutes);
routes.use("/users", userRoutes);
routes.use("/posts", postsRoutes);

export default routes;
