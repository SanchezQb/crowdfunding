import { Field, InputType, Int } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateTransactionInput {

    @IsNotEmpty()
    @Field(() => Int)
    @Transform(amount => parseInt(amount), { toClassOnly: true })
    amount: number;

    @MinLength(3)
    @Field()
    donorName: string;

    @IsBoolean()
    @Field()
    anonymous: boolean;

    @IsEmail()
    @Field()
    donorEmail: string;

    @Field({ nullable: true })
    user?: string;

    @IsNotEmpty()
    @Field()
    reference: string;

    @Field()
    campaign: string;

}