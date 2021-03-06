import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Campaign } from 'src/campaign/schemas/campaign.schema';
import { CreateTransactionInput } from './input/transaction.input';
import { Transaction } from './schemas/transaction.schema';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
        @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
        @InjectModel(User.name) private userModel: Model<User>,
    ) { }

    async getCampaignForTransaction(campaign: string): Promise<Campaign> {
        return this.campaignModel.findById(campaign);
    }
    createTransaction(createTransactioninput: CreateTransactionInput): Promise<Transaction> {
        const transaction = new this.transactionModel({ ...createTransactioninput, createdAt: new Date() });
        return transaction.save();
        //inrement campaign amount
        //set updated at
    }
    async getTransaction(id: string): Promise<Transaction> {
        const found = await this.transactionModel.findById(id)
        if (!found) {
            throw new NotFoundException()
        }
        return found;
    }
    async getTransactions(): Promise<Transaction[]> {
        return this.transactionModel.find()
    }

    async getUserForTransaction(user: string): Promise<User> {
        return this.userModel.findById(user);
    }
}
