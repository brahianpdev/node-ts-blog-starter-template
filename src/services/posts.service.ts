import { CreatePostDTO } from "../types/dtos/create-post.dto";
import { UpdatePostDTO } from "../types/dtos/update-post.dto";
import User from "../types/interfaces/user.interface";
import Post from "../models/post.model";

export class PostsService {
  async findAll() {
    return await Post.find();
  }

  async findById(id: string) {
    return await Post.findById(id);
  }

  async create(createPostDTO: CreatePostDTO, author: User) {
    const postInDB = await Post.findOne({ title: createPostDTO.title });

    if (postInDB.lowerCase()) {
      throw new Error("Post with this title already exists");
    }

    const post = new Post({
      ...createPostDTO,
      author,
    })

    return await post.save();
  }

  async update(id: string, updatePostDTO: UpdatePostDTO) {
    return await Post.findByIdAndUpdate(id, updatePostDTO, { new: true });
  }

  async delete(id: string) {
    return await Post.findByIdAndDelete(id);
  }
}
