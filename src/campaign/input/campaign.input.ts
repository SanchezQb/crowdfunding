import { Field, InputType, Int } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsMongoId, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateCampaignInput {
    @MinLength(3)
    @Field()
    name: string;

    @Field()
    @IsMongoId()
    category: string;

    @MinLength(3)
    @Field()
    description: string;

    @IsNotEmpty()
    @Field()
    image: string;

    @Field({ nullable: true })
    url?: string;

    @IsNotEmpty()
    @Field(() => Int)
    @Transform(target => parseInt(target), { toClassOnly: true })
    target: number;

    @Field({ nullable: true })
    beneficiary?: string;

    @Field()
    expiry: string;

}