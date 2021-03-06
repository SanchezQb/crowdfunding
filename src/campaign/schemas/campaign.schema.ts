import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Campaign extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    slug: string;

    @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
    category: string;

    @Prop({ required: true, default: 0 })
    amount: number;

    @Prop({ required: true })
    target: number;

    @Prop({ required: true })
    image: string;

    @Prop()
    url: string;

    @Prop({ required: true })
    status: string;

    @Prop({ default: 0 })
    transactionCount: number;

    @Prop({ default: 0 })
    shareCount: number;

    @Prop({ default: 0 })
    updateCount: number;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: string;

    @Prop()
    beneficiary: string;

    @Prop()
    createdAt: Date;

    @Prop()
    expiry: Date;

    @Prop()
    updatedAt: Date;

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);