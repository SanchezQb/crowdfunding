import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReportModule } from './report/report.module';
import { NotificationModule } from './notification/notification.module';
import { UpdateModule } from './update/update.module';
import { CampaignModule } from './campaign/campaign.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    TransactionModule,
    ReportModule,
    NotificationModule,
    UpdateModule,
    CampaignModule,
    CategoryModule,
    MongooseModule.forRoot('', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    })
  ],
})
export class AppModule { }
