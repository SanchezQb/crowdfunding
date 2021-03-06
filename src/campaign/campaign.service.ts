import { Injectable, NotFoundException } from '@nestjs/common';
import { Campaign } from './schemas/campaign.schema';
import { CreateCampaignInput } from './input/campaign.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/category/schemas/category.schema';
import { Update } from 'src/update/schemas/update.schema';
import { CampaignStatus } from './campaign-status.enum';
import { Transaction } from 'src/transaction/schemas/transaction.schema';

@Injectable()
export class CampaignService {
    constructor(
        @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
        @InjectModel(Category.name) private categoryModel: Model<Category>,
        @InjectModel(Update.name) private updateModel: Model<Update>,
        @InjectModel(Update.name) private transactionModel: Model<Transaction>,
    ) { }

    async getCampaigns(): Promise<Campaign[]> {
        return this.campaignModel.find();
    }

    async getActiveCampaigns(): Promise<Campaign[]> {
        return this.campaignModel.find({ status: CampaignStatus.ACTIVE });
    }


    async getCampaign(id: string): Promise<Campaign> {
        return this.campaignModel.findOne({ id });
    }

    async createCampaign(createCampaignInput: CreateCampaignInput): Promise<Campaign> {
        const campaign = new this.campaignModel({
            ...createCampaignInput,
            slug: "Slug",
            status: CampaignStatus.ACTIVE,
            user: "123456",//from guard,
            createdAt: new Date(),
        });
        return campaign.save();
    }

    async getCategoryForCampaign(category: string): Promise<Category> {
        return this.categoryModel.findById(category)
    }

    async getUpdatesForCampaign(campaign: string): Promise<Update[]> {
        return this.updateModel.find({ campaign })
    }

    async getTransactionsForCampaign(campaign: string): Promise<Transaction[]> {
        return this.transactionModel.find({ campaign })
    }

    async suspendCampaign(id: string): Promise<Campaign> {
        const found = await this.campaignModel.findById(id);

        if (!found) {
            throw new NotFoundException()
        }
        found.status = CampaignStatus.SUSPENDED
        await found.save()
        return found;
    }
}
