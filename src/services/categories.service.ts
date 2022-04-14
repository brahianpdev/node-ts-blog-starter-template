import Category from "../models/category.model";
import { CreateCategoryDTO } from "../types/dtos/create-category.dto";
import { UpdateCategoryDTO } from '../types/dtos/update-category.dto';

export class CategoriesService {
  async findAll() {
    return await Category.find();
  }

  async findById(id: string) {
    return await Category.findById(id);
  }

  async create(category: CreateCategoryDTO) {
    return await Category.create(category);
  }

  async update(id: string, category: UpdateCategoryDTO) {
    return await Category.findByIdAndUpdate(id, category, { new: true });
  }

  async delete(id: string) {
    return await Category.findByIdAndDelete(id);
  }
}
