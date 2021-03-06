import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from 'src/campaign/schemas/campaign.schema';
import { Update, UpdateSchema } from './schemas/update.schema';
import { UpdateResolver } from './update.resolver';
import { UpdateService } from './update.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Update.name, schema: UpdateSchema }]),
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
  ],
  providers: [UpdateResolver, UpdateService]
})
export class UpdateModule { }
