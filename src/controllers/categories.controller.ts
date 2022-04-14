import { Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";

class CategoriesController {
  async findAll(req: Request, res: Response) {
    const categories = await new CategoriesService().findAll();
    return res.json({
      message: "Categories found",
      categories,
    });
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const category = await new CategoriesService().findById(id);
    return res.json({
      message: "Category found",
      category,
    });
  }

  async create(req: Request, res: Response) {
    const category = await new CategoriesService().create(req.body);
    return res.json({
      message: "Category created",
      category,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const category = await new CategoriesService().update(id, req.body);
    return res.json({
      message: "Category updated",
      category,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const category = await new CategoriesService().delete(id);
    return res.json({
      message: "Category deleted",
      category,
    });
  }
}

export default new CategoriesController();
