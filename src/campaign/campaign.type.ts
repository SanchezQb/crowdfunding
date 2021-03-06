import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/auth/user.type";
import { CategoryType } from "src/category/category.type";
import { TransactionType } from "src/transaction/transaction.type";
import { UpdateType } from "src/update/update.type";

@ObjectType('Campaign')
export class CampaignType {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field(() => CategoryType)
    category: CategoryType;

    @Field()
    description: string;

    @Field()
    slug: string;

    @Field(() => Int)
    amount: number;

    @Field()
    image: string;

    @Field({ nullable: true })
    url?: string;

    @Field(() => Int)
    target: number;

    @Field()
    status: string;

    @Field()
    transactionCount: number;

    @Field()
    shareCount: number;

    @Field()
    updateCount: number;

    @Field(() => UserType)
    user: UserType;

    @Field({ nullable: true })
    beneficiary?: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;

    @Field()
    expiry: string;

    @Field(() => [TransactionType])
    transactions: [TransactionType];

    @Field(() => [UpdateType])
    updates: [UpdateType];
}