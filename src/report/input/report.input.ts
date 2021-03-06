import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsMongoId, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateReportInput {
    @IsNotEmpty()
    @Field()
    description: string;

    @IsNotEmpty()
    @Field()
    @MinLength(3)
    name: string;

    @IsEmail()
    @Field()
    email: string;

    @Field({ nullable: true })
    phoneNumber?: string;

    @IsMongoId()
    @Field()
    campaign: string;

    @Field()
    knowsOrganizer?: boolean;

}