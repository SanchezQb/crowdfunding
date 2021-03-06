import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUpdateInput } from './input/update.input';
import { UpdateService } from './update.service';
import { UpdateType } from './update.type';

@Resolver(() => UpdateType)
export class UpdateResolver {
    constructor(private updateService: UpdateService) { }

    @Mutation(() => UpdateType)
    async createUpdate(
        @Args('createUpdateInput') createUpdateInput: CreateUpdateInput,
    ) {
        return this.updateService.createUpdate(createUpdateInput)
    }
}
