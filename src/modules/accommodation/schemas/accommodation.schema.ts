import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Accommodation extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  location: string;

  @ApiProperty()
  @Prop({ required: true })
  price: number;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  ownerId: Types.ObjectId;

  @ApiProperty()
  @Prop({ enum: ['AVAILABLE', 'TAKEN'], default: 'AVAILABLE' })
  status: string;

  @ApiProperty()
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty()
  @Prop([String])
  amenities: string[];

  @ApiProperty()
  @Prop({ default: false })
  roommateWanted: boolean;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
