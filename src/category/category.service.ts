import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryInput } from './input/category.input';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoryService {

    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>,
    ) { }

    async getCategories(): Promise<Category[]> {
        return this.categoryModel.find();
    }
    async getCategory(id: string) {
        return this.categoryModel.findOne({ id });
    }
    async createCategory(createCategoryInput: CreateCategoryInput): Promise<Category> {
        const category = new this.categoryModel({ ...createCategoryInput });
        return category.save();
    }
}
