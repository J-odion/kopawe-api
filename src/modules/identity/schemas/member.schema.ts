import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Member extends Document {
  @ApiProperty()
  @Prop({ required: true, unique: true })
  callUpNumber: string;

  @ApiProperty()
  @Prop({ required: true })
  stateCode: string;

  @ApiProperty()
  @Prop({ required: true })
  fullName: string;

  @ApiProperty()
  @Prop({ required: true })
  state: string;

  @ApiProperty()
  @Prop({ required: true })
  lga: string;

  @ApiProperty()
  @Prop({ required: true })
  cdsGroup: string;

  @ApiProperty()
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty()
  @Prop({ default: 0 })
  creditScore: number;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
