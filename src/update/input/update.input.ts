import { Field, InputType } from "@nestjs/graphql";
import { IsMongoId, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUpdateInput {
    @IsNotEmpty()
    @Field()
    description: string;

    @IsMongoId()
    @Field()
    campaign: string;

    @Field({ nullable: true })
    image?: string;

}