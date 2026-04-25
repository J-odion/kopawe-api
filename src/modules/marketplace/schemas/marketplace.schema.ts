import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Product extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ required: true })
  price: number;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  sellerId: Types.ObjectId;

  @ApiProperty()
  @Prop({ enum: ['NEW', 'USED'], default: 'NEW' })
  condition: string;

  @ApiProperty()
  @Prop({ enum: ['AVAILABLE', 'SOLD', 'PENDING'], default: 'AVAILABLE' })
  status: string;

  @ApiProperty()
  @Prop({ default: false })
  isBundle: boolean;

  @ApiProperty()
  @Prop([String]) // IDs or names of items in bundle
  bundleItems: string[];

  @ApiProperty()
  @Prop({ type: Object }) // { provider: string, trackingNumber: string, status: string }
  logistics: any;

  @ApiProperty()
  @Prop()
  category: string;

  @ApiProperty()
  @Prop([String])
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

@Schema({ timestamps: true })
export class EscrowTransaction extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  buyerId: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  sellerId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  amount: number;

  @ApiProperty()
  @Prop({ enum: ['HELD', 'RELEASED', 'DISPUTED', 'REFUNDED'], default: 'HELD' })
  status: string;
}

export const EscrowTransactionSchema = SchemaFactory.createForClass(EscrowTransaction);
