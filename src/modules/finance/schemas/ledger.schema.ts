import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum AccountType {
  MAIN = 'MAIN',
  SAVINGS = 'SAVINGS',
  ESCROW = 'ESCROW',
  SYSTEM = 'SYSTEM',
}

export enum TransactionType {
  TRANSFER = 'TRANSFER',
  LOAN_DISBURSEMENT = 'LOAN_DISBURSEMENT',
  LOAN_REPAYMENT = 'LOAN_REPAYMENT',
  MARKETPLACE_PAYMENT = 'MARKETPLACE_PAYMENT',
  ESCROW_RELEASE = 'ESCROW_RELEASE',
  BILL_PAYMENT = 'BILL_PAYMENT',
}

@Schema({ timestamps: true })
export class LedgerEntry extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, required: true })
  transactionId: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ enum: AccountType, required: true })
  accountType: AccountType;

  @ApiProperty()
  @Prop({ required: true })
  amount: number; // Positive for Credit, Negative for Debit

  @ApiProperty()
  @Prop({ required: true })
  balanceAfter: number;

  @ApiProperty()
  @Prop({ required: true })
  description: string;
}

export const LedgerEntrySchema = SchemaFactory.createForClass(LedgerEntry);

@Schema({ timestamps: true })
export class TransactionRecord extends Document {
  @ApiProperty()
  @Prop({ enum: TransactionType, required: true })
  type: TransactionType;

  @ApiProperty()
  @Prop({ required: true })
  amount: number;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member' })
  fromMemberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member' })
  toMemberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ enum: ['PENDING', 'SUCCESS', 'FAILED'], default: 'PENDING' })
  status: string;

  @ApiProperty()
  @Prop({ type: Object })
  metadata: any;
}

export const TransactionRecordSchema = SchemaFactory.createForClass(TransactionRecord);
