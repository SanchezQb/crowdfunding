import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
export class UserType {

    @Field(() => ID)
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    phoneNumber: string;

    @Field()
    status: string;

    @Field(() => Int)
    transactionCount: number;

    @Field(() => Int)
    campaignCount: number;

    @Field()
    role: string;

    @Field()
    confirmed: boolean;

    @Field()
    createdAt: string;
}