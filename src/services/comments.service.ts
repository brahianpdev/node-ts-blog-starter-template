import User from "../types/interfaces/user.interface";
import Post from "../models/post.model";
import Comment from "../models/comment.model";
import { CreateCommentDTO } from "../types/dtos/create-comment.dto";
import { UpdateCommentDTO } from "../types/dtos/update-comment.dto";

export class CommentsService {
  async findAll(): Promise<Comment[]> {
    return await Comment.find();
  }

  async create(id: string, createCommentDTO: CreateCommentDTO, author: User) {
    try {
      const comment = new Comment({
        ...createCommentDTO,
        author,
      });

      await comment.save();

      const postRelated = await Post.findById(id);
      postRelated.comments.push(comment);

      return await postRelated.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(
    id: string,
    comment: UpdateCommentDTO,
    author: User
  ): Promise<Comment> {
    try {
      if (author._id !== comment.author) {
        throw new Error("You are not the author of this comment");
      }

      const updatedComment = await Comment.findByIdAndUpdate(
        id,
        {
          ...comment,
          author,
        },
        { new: true }
      );

      return updatedComment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string, author: User): Promise<Comment> {
    try {
      const comment = await Comment.findById(id);

      if (author._id !== comment.author) {
        throw new Error("You are not the author of this comment");
      }

      await Comment.findByIdAndDelete(id);

      return comment;
    } catch (error) {
      throw new Error(error);
    }
  }
}
