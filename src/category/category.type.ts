import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Category')
export class CategoryType {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    image: string;
}