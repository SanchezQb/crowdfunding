import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, startSession } from 'mongoose';
import { Campaign } from 'src/campaign/schemas/campaign.schema';
import { CreateUpdateInput } from './input/update.input';
import { Update } from './schemas/update.schema';

@Injectable()
export class UpdateService {
    constructor(
        @InjectModel(Update.name) private updateModel: Model<Update>,
        @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
    ) { }


    async createUpdate(createUpdateInput: CreateUpdateInput): Promise<Update> {
        const update = new this.updateModel({ ...createUpdateInput, createdAt: new Date() });
        return update.save();
        //increment update count in campaign
    }
}
