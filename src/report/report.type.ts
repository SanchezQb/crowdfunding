import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CampaignType } from "src/campaign/campaign.type";

@ObjectType('Report')
export class ReportType {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    phoneNumber?: string;

    @Field(() => CampaignType)
    campaign: CampaignType;

    @Field()
    description: string;

    @Field()
    knowsOrganizer: boolean;

    @Field()
    createdAt: string;
}