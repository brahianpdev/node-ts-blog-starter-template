import { CreatePostDTO } from "../types/dtos/create-post.dto";
import { UpdatePostDTO } from "../types/dtos/update-post.dto";
import User from "../types/interfaces/user.interface";
import Post from "../models/post.model";

export class PostsService {
  async findAll() {
    try {
      return await Post.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string) {
    try {
      return await Post.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(createPostDTO: CreatePostDTO, author: User) {
    try {
      const postInDB = await Post.findOne({ title: createPostDTO.title });

      if (postInDB.lowerCase()) {
        throw new Error("Post with this title already exists");
      }

      const post = new Post({
        ...createPostDTO,
        author,
      });

      return await post.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updatePostDTO: UpdatePostDTO) {
    try {
      return await Post.findByIdAndUpdate(id, updatePostDTO, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string) {
    try {
      return await Post.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
