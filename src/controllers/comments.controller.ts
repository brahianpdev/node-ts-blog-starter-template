import { Request, Response } from "express";
import RequestWithUser from "../types/interfaces/requestWithUser.interface";
import { CommentsService } from "../services/comments.service";

class CommentController {
  async findAll(req: Request, res: Response) {
    const comments = await new CommentsService().findAll();
    res.json({
      message: "Comments found successfully",
      comments,
    });
  }

  async create(req: RequestWithUser, res: Response) {
    const commentData = req.body;
    const author: any = req.user._id;
    const id = req.params.id;

    const comment = await new CommentsService().create(id, commentData, author);

    return res.json({
      message: "Comment created successfully",
      comment,
    });
  }

  async update(req: RequestWithUser, res: Response) {
    const commentData = req.body;
    const author: any = req.user._id;
    const id = req.params.id;

    const comment = await new CommentsService().update(id, commentData, author);

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    return res.json({
      message: "Comment updated successfully",
      comment,
    });
  }

  async delete(req: RequestWithUser, res: Response) {
    const author: any = req.user._id;
    const id = req.params.id;

    const comment = await new CommentsService().delete(id, author);

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    return res.json({
      message: "Comment deleted successfully",
    });
  }
}

export default new CommentController();
