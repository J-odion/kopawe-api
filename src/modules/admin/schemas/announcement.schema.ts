import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Announcement extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  content: string;

  @ApiProperty()
  @Prop({ required: true })
  targetAudience: string; // e.g., 'ALL', 'LAGOS', 'CDS-ICT'

  @ApiProperty()
  @Prop({ default: 'INFO' })
  type: string; // e.g., 'INFO', 'URGENT', 'EVENT'
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
