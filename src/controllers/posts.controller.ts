import { Request, Response } from "express";
import { PostsService } from "../services/posts.service";
import RequestWithUser from "../types/interfaces/requestWithUser.interface";

class PostsController {
  async findAll(req: Request, res: Response) {
    const posts = await new PostsService().findAll();

    res.json({
      message: "Posts obtained successfully",
      posts,
    });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const post = await new PostsService().findById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post found successfully",
      post,
    });
  }

  async create(req: RequestWithUser, res: Response) {
    const postData = req.body;
    const author: any = req.user._id;

    const post = await new PostsService().create(postData, author);
    return res.json({
      message: "Post created successfully",
      post,
    });
  }

  async update(req: RequestWithUser, res: Response) {
    const postData = req.body;
    const author: any = req.user._id;
    const id = req.params.id;

    const post = await new PostsService().update(id, postData, author);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post updated successfully",
      post,
    });
  }

  async remove(req: RequestWithUser, res: Response) {
    const author: any = req.user._id;
    const id = req.params.id;

    const post = await new PostsService().remove(id, author);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post removed successfully",
      post,
    });
  }

  async publish(req: RequestWithUser, res: Response) {
    const author: any = req.user._id;
    const id = req.params.id;

    const post = await new PostsService().publish(id, author);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    return res.json({
      message: "Post published successfully",
    })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const post = await new PostsService().delete(id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post deleted successfully",
      post,
    });
  }
}

export default new PostsController();
