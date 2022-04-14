import { Request, Response } from "express";
import { CommentsService } from "../services/comments.service";

class CommentController {
  async findAll(req: Request, res: Response) {
    const comments = await new CommentsService().findAll();
    res.json({
      message: "Comments found",
      comments,
    });
  }

  async create(req: Request, res: Response) {
    const comment = await new CommentsService().create(req.body);
    res.json({
      message: "Comment created",
      comment,
    });
  }

  async update(req: Request, res: Response) {
    const comment = await new CommentsService().update(req.params.id, req.body);
    res.json({
      message: "Comment updated",
      comment,
    });
  }

  async delete(req: Request, res: Response) {
    const comment = await new CommentsService().delete(req.params.id);
    res.json({
      message: "Comment deleted",
      comment,
    });
  }
}

export default new CommentController();
