import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Report extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, lowercase: true, trim: true })
    email: string;

    @Prop()
    phoneNumber: string;

    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
    campaign: string;

    @Prop()
    knowsOrganizer: boolean;

    @Prop()
    createdAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);