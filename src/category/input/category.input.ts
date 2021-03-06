import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateCategoryInput {
    @MinLength(3)
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    image: string;

}