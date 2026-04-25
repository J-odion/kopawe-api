import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Job extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  company: string;

  @ApiProperty()
  @Prop({ required: true })
  location: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  salary: string;

  @ApiProperty()
  @Prop({ default: 'OPEN' })
  status: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
