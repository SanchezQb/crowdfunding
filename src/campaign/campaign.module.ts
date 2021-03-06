import { Module } from '@nestjs/common';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { CampaignResolver } from './campaign.resolver';
import { CampaignService } from './campaign.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/category/schemas/category.schema';
import { Update, UpdateSchema } from 'src/update/schemas/update.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
        MongooseModule.forFeature([{ name: Update.name, schema: UpdateSchema }]),
    ],
    providers: [CampaignResolver, CampaignService]
})
export class CampaignModule { }
