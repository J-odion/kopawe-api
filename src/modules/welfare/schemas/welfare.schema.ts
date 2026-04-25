import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class WelfareFund extends Document {
  @ApiProperty()
  @Prop({ default: 0 })
  totalPool: number;

  @ApiProperty()
  @Prop({ default: 0 })
  totalDisbursed: number;

  @ApiProperty()
  @Prop({ default: 'NGN' })
  currency: string;
}

export const WelfareFundSchema = SchemaFactory.createForClass(WelfareFund);

@Schema({ timestamps: true })
export class WelfareRequest extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  amount: number;

  @ApiProperty()
  @Prop({ required: true })
  reason: string;

  @ApiProperty()
  @Prop({ enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' })
  status: string;

  @ApiProperty()
  @Prop()
  adminNote: string;
}

export const WelfareRequestSchema = SchemaFactory.createForClass(WelfareRequest);
