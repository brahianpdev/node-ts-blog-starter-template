import { Request, Response, NextFunction } from "express";

export function isAdminMiddelware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user } = req.body;

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  if (user.role !== "ADMIN") {
    return res.status(401).json({
      message: "User not authorized",
    });
  }

  next();
}
