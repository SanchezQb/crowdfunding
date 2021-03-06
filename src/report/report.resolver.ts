import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CampaignType } from 'src/campaign/campaign.type';
import { CreateReportInput } from './input/report.input';
import { ReportService } from './report.service';
import { ReportType } from './report.type';
import { Report } from './schemas/report.schema';

@Resolver(() => ReportType)
export class ReportResolver {
    constructor(private reportService: ReportService) { }


    @Query(() => [ReportType])
    async reports() {
        return this.reportService.getReports();
    }

    @Query(() => ReportType)
    async report(
        @Args('id') id: string,
    ) {
        return this.reportService.getReport(id);
    }

    @Mutation(() => ReportType)
    async createReport(
        @Args('createReportInput') createReportInput: CreateReportInput,
    ) {
        return this.reportService.createReport(createReportInput)
    }

    @ResolveField(() => CampaignType)
    async campaign(@Parent() report: Report) {
        return this.reportService.getCampaignForReport(report.campaign)
    }

}
