import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Update extends Document {

    @Prop({ required: true })
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
    campaign: string;

    @Prop()
    image: string;

    @Prop()
    createdAt: Date;
}

export const UpdateSchema = SchemaFactory.createForClass(Update);