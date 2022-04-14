import { Router } from "express";
const routes = Router();

import userRoutes from "./users.routes";
import authRoutes from "./authentication.routes";
import postsRoutes from "./posts.routes";
import categoriesRoutes from "./categories.routes";
import commentsRoutes from "./comments.routes";

routes.use("/auth",  authRoutes);
routes.use("/users", userRoutes);
routes.use("/posts", postsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/comments", commentsRoutes);

export default routes;
