import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Transaction extends Document {

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    donorName: string;

    @Prop({ default: false })
    anonymous: boolean;

    @Prop({ required: true })
    donorEmail: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: string;

    @Prop({ required: true })
    reference: string;

    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
    campaign: string;

    @Prop()
    createdAt: Date;

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
