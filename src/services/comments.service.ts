import Comment from "../models/comment.model";
import { CreateCommentDTO } from "../types/dtos/create-comment.dto";
import { UpdateCommentDTO } from "../types/dtos/update-comment.dto";

export class CommentsService {
  async findAll(): Promise<Comment[]> {
    return await Comment.find();
  }

  async create(comment: CreateCommentDTO): Promise<Comment> {
    try {
      return await Comment.create(comment);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, comment: UpdateCommentDTO): Promise<Comment> {
    try {
      return await Comment.findByIdAndUpdate(id, comment, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<Comment> {
    try {
      return await Comment.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
