import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateCategoryInput } from './input/category.input';
import { CategoryService } from './category.service';
import { CategoryType } from './category.type';

@Resolver((() => CategoryType))
export class CategoryResolver {
    constructor(private categoryService: CategoryService) { }


    @Query(() => [CategoryType])
    async categories() {
        return this.categoryService.getCategories();
    }

    @Query(() => CategoryType)
    async category(
        @Args('id') id: string,
    ) {
        return this.categoryService.getCategory(id);
    }


    @Mutation(() => CategoryType)
    async createCategory(
        @Args('createCategoryInput') createCategoryInput: CreateCategoryInput
    ) {
        return this.categoryService.createCategory(createCategoryInput);
    }

}
