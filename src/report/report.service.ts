import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from 'src/campaign/schemas/campaign.schema';
import { CreateReportInput } from './input/report.input';
import { Report } from './schemas/report.schema';

@Injectable()
export class ReportService {
    constructor(
        @InjectModel(Report.name) private reportModel: Model<Report>,
        @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
    ) { }

    async getCampaignForReport(campaign: string): Promise<Campaign> {
        return this.campaignModel.findById(campaign)
    }
    async createReport(createReportInput: CreateReportInput) {
        const report = new this.reportModel({ ...createReportInput, createdAt: new Date() });
        return report.save();
    }

    async getReport(id: string): Promise<Report> {
        const found = await this.reportModel.findById(id);

        if (!found) {
            throw new NotFoundException()
        }
        return found;
    }
    async getReports(): Promise<Report[]> {
        return this.reportModel.find()
    }
}
