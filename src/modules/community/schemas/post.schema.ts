import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class CommunityPost extends Document {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  authorId: Types.ObjectId;

  @ApiProperty()
  @Prop({ required: true })
  content: string;

  @ApiProperty()
  @Prop({ required: true })
  state: string;

  @ApiProperty()
  @Prop({ required: true })
  lga: string;

  @ApiProperty()
  @Prop([String])
  images: string[];

  @ApiProperty()
  @Prop({ default: 0 })
  likes: number;
}

export const CommunityPostSchema = SchemaFactory.createForClass(CommunityPost);
