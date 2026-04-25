import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum PostCategory {
  NEWS = 'NEWS',
  SPORTS = 'SPORTS',
  RELIGIOUS = 'RELIGIOUS',
  PROGRAMS = 'PROGRAMS',
  COUNSELING = 'COUNSELING',
  DISCUSSION = 'DISCUSSION',
}

export enum PostType {
  OFFICIAL = 'OFFICIAL',
  VERIFIED = 'VERIFIED',
  GENERAL = 'GENERAL',
}

@Schema({ timestamps: true })
export class CommunityPost extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  authorId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  content: string;

  @ApiProperty({ enum: PostCategory })
  @Prop({ enum: PostCategory, default: PostCategory.DISCUSSION })
  category: PostCategory;

  @ApiProperty({ enum: PostType })
  @Prop({ enum: PostType, default: PostType.GENERAL })
  type: PostType;

  @ApiProperty()
  @Prop({ required: true })
  state: string;

  @ApiProperty()
  @Prop({ required: true })
  lga: string;

  @ApiProperty()
  @Prop([String])
  images: string[];

  @ApiProperty({ type: [String] })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Member' }], default: [] })
  upvotes: Types.ObjectId[];

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'CommunityPost', default: null })
  parentId: Types.ObjectId; // For nested comments

  @ApiProperty()
  @Prop({ default: false })
  isDevotional: boolean;
}

export const CommunityPostSchema = SchemaFactory.createForClass(CommunityPost);

@Schema({ timestamps: true })
export class Poll extends Document {
  @ApiProperty()
  @Prop({ required: true })
  question: string;

  @ApiProperty()
  @Prop([String])
  options: string[];

  @ApiProperty()
  @Prop({ type: Map, of: Number, default: {} })
  results: Map<string, number>;

  @ApiProperty()
  @Prop({ required: true })
  state: string;
}

export const PollSchema = SchemaFactory.createForClass(Poll);

@Schema({ timestamps: true })
export class CommunityEvent extends Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ required: true })
  date: Date;

  @ApiProperty()
  @Prop({ required: true })
  location: string;

  @ApiProperty()
  @Prop({ required: true })
  state: string;

  @ApiProperty({ type: [String] })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Member' }], default: [] })
  rsvps: Types.ObjectId[];
}

export const CommunityEventSchema = SchemaFactory.createForClass(CommunityEvent);
