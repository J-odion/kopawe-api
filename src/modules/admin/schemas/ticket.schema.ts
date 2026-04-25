import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class SupportTicket extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  subject: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'], default: 'OPEN' })
  status: string;

  @ApiProperty()
  @Prop({ enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'], default: 'MEDIUM' })
  priority: string;

  @ApiProperty()
  @Prop([Object]) // { author: string, message: string, timestamp: Date }
  replies: any[];
}

export const SupportTicketSchema = SchemaFactory.createForClass(SupportTicket);
