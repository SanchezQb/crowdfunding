import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserType } from 'src/auth/user.type';
import { CampaignType } from 'src/campaign/campaign.type';
import { CreateTransactionInput } from './input/transaction.input';
import { Transaction } from './schemas/transaction.schema';
import { TransactionService } from './transaction.service';
import { TransactionType } from './transaction.type';

@Resolver(() => TransactionType)
export class TransactionResolver {
    constructor(private transactionService: TransactionService) { }

    @Query(() => [TransactionType])
    async transactions() {
        return this.transactionService.getTransactions();
    }

    @Query(() => TransactionType)
    async transaction(
        @Args('id') id: string,
    ) {
        return this.transactionService.getTransaction(id);
    }


    @Mutation(() => TransactionType)
    async createTransactioon(
        @Args('createTransactioninput') createTransactioninput: CreateTransactionInput,
    ) {
        return this.transactionService.createTransaction(createTransactioninput)
    }

    @ResolveField(() => CampaignType)
    async campaign(@Parent() transaction: Transaction) {
        return this.transactionService.getCampaignForTransaction(transaction.campaign)
    }

    @ResolveField(() => UserType)
    async user(@Parent() transaction: Transaction) {
        return this.transactionService.getUserForTransaction(transaction.user)
    }
}


