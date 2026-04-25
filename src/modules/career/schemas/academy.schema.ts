import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class AcademyCourse extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ enum: ['TECH', 'BUSINESS', 'FREELANCING', 'ENTREPRENEURSHIP'], required: true })
  category: string;

  @ApiProperty()
  @Prop({ enum: ['COURSE', 'WEBINAR', 'WORKSHOP'], default: 'COURSE' })
  type: string;

  @ApiProperty()
  @Prop()
  contentUrl: string;

  @ApiProperty()
  @Prop({ default: 0 })
  studentsCount: number;
}

export const AcademyCourseSchema = SchemaFactory.createForClass(AcademyCourse);

@Schema({ timestamps: true })
export class CounselingSession extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberId: Types.ObjectId;

  @ApiProperty()
  @Prop({ enum: ['CAREER', 'RELATIONSHIP', 'MENTAL_HEALTH'], required: true })
  category: string;

  @ApiProperty()
  @Prop({ required: true })
  details: string;

  @ApiProperty()
  @Prop({ enum: ['PENDING', 'BOOKED', 'COMPLETED'], default: 'PENDING' })
  status: string;

  @ApiProperty()
  @Prop()
  counselorName: string;

  @ApiProperty()
  @Prop()
  scheduledAt: Date;
}

export const CounselingSessionSchema = SchemaFactory.createForClass(CounselingSession);
