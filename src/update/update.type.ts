import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CampaignType } from "src/campaign/campaign.type";

@ObjectType('Update')
export class UpdateType {

    @Field(() => ID)
    id: string;

    @Field(() => CampaignType)
    campaign: CampaignType;

    @Field()
    description: string;

    @Field({ nullable: true })
    image?: string;

    @Field()
    createdAt: string;
}