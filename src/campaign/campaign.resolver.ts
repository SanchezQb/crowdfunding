import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CreateCampaignInput } from './input/campaign.input';
import { CampaignService } from './campaign.service';
import { CampaignType } from './campaign.type';
import { Campaign } from './schemas/campaign.schema';
import { CategoryType } from 'src/category/category.type';
import { UpdateType } from 'src/update/update.type';
import { TransactionType } from 'src/transaction/transaction.type';

@Resolver(() => CampaignType)
export class CampaignResolver {
    constructor(private campaignService: CampaignService) { }

    //Admin Guarded
    @Query(() => [CampaignType])
    async campaigns() {
        return this.campaignService.getCampaigns();
    }

    @Query(() => [CampaignType])
    async activeCampaigns() {
        return this.campaignService.getActiveCampaigns();
    }

    @Query(() => CampaignType)
    async campaign(
        @Args('id') id: string,
    ) {
        return this.campaignService.getCampaign(id);
    }


    @Mutation(() => CampaignType)
    async createCampaign(
        @Args('createCampaignInput') createCampaignInput: CreateCampaignInput,
    ) {
        return this.campaignService.createCampaign(createCampaignInput)
    }


    //Admin Guarded
    @Mutation(() => CampaignType)
    async suspendCampaign(
        @Args('id') id: string,
    ) {
        return this.campaignService.suspendCampaign(id)
    }

    @ResolveField(() => [TransactionType])
    async transactions(@Parent() campaign: Campaign) {
        return this.campaignService.getTransactionsForCampaign(campaign.id)
    }

    @ResolveField(() => CategoryType)
    async category(@Parent() campaign: Campaign) {
        return this.campaignService.getCategoryForCampaign(campaign.category)
    }

    @ResolveField(() => [UpdateType])
    async updates(@Parent() campaign: Campaign) {
        return this.campaignService.getUpdatesForCampaign(campaign.id)
    }
}
