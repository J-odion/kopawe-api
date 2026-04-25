import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Wallet extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true, unique: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ default: 0 })
  balance: number;

  @ApiProperty()
  @Prop({ default: 0 })
  savingsBalance: number;

  @ApiProperty()
  @Prop({ default: 0 })
  groupSavingsBalance: number;

  @ApiProperty()
  @Prop({ default: false })
  isLocked: boolean;

  @ApiProperty()
  @Prop({ default: 'NGN' })
  currency: string;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);

@Schema({ timestamps: true })
export class Loan extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  amount: number;

  @ApiProperty()
  @Prop({ required: true })
  interest: number;

  @ApiProperty()
  @Prop({ required: true })
  repaymentDate: Date;

  @ApiProperty()
  @Prop({ enum: ['PENDING', 'APPROVED', 'DISBURSED', 'REPAID', 'DEFAULTED'], default: 'PENDING' })
  status: string;

  @ApiProperty()
  @Prop([Object]) // { date: Date, amount: number, status: 'PAID' | 'PENDING' }
  repaymentSchedule: any[];

  @ApiProperty()
  @Prop()
  purpose: string;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
