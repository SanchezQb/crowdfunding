import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, lowercase: true, unique: true, trim: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop()
    campaignCount: number;

    @Prop({ required: true })
    status: string;

    @Prop({ default: 0 })
    transactionCount: number;

    @Prop()
    createdAt: Date;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    confirmed: boolean;

    @Prop()
    confirmEmailToken: string;

    @Prop()
    resetPasswordToken: string;

    @Prop()
    resetPasswordExpires: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);