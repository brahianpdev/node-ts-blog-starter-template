import { CreatePostDTO } from "../types/dtos/create-post.dto";
import { UpdatePostDTO } from "../types/dtos/update-post.dto";
import User from "../types/interfaces/user.interface";
import Post from "../models/post.model";
import { title } from "process";

export class PostsService {
  async findAll() {
    try {
      return await Post.find({ status: true });
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
    const postTitle = createPostDTO.title.toUpperCase();
    const postDB = await Post.findOne({ title: postTitle });
    postTitle.replace(/\s+/g, "-").toUpperCase();

    if (postDB) {
      throw new Error("Post already exists");
    }

    const post = new Post({
      ...createPostDTO,
      title: postTitle,
      author,
    });

    return await post.save();
  }

  async update(id: string, updatePostDTO: UpdatePostDTO, author: User) {
    try {
      const post = await Post.findById(id);

      if (author._id !== post.author) {
        throw new Error("You are not the author of this post");
      }

      return await Post.findByIdAndUpdate(
        id,
        { ...updatePostDTO, author },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string, author: User) {
    const post = await Post.findById(id);

    if (author._id !== post.author) {
      throw new Error("You are not the author of this post");
    }

    return await Post.findByIdAndUpdate(id, { status: false }, { new: true });
  }

  async publish(id: string, author: User) {
    const post = await Post.findById(id);

    if (author._id !== post.author) {
      throw new Error("You are not the author of this post");
    }

    return await Post.findByIdAndUpdate(id, { status: true }, { new: true });
  }

  async delete(id: string) {
    try {
      return await Post.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
