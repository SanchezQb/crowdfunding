import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/auth/user.type";
import { CampaignType } from "src/campaign/campaign.type";

@ObjectType('Transaction')
export class TransactionType {

    @Field(() => ID)
    id: string;

    @Field(() => Int)
    amount: number;

    @Field()
    donorName: string;

    @Field()
    anonymous: boolean;

    @Field()
    donorEmail: string;

    @Field(() => UserType, { nullable: true })
    user: UserType;

    @Field()
    reference: string;

    @Field(() => CampaignType)
    campaign: CampaignType;

    @Field()
    createdAt: string;
}