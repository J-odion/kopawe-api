import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommunityPost } from './schemas/post.schema';

@Injectable()
export class CommunityService {
  constructor(@InjectModel(CommunityPost.name) private postModel: Model<CommunityPost>) {}

  async createPost(authorId: string, data: any): Promise<CommunityPost> {
    const post = new this.postModel({
      ...data,
      authorId: new Types.ObjectId(authorId),
    });
    return post.save();
  }

  async getRegionalFeed(state: string, lga?: string): Promise<CommunityPost[]> {
    const query: any = { state };
    if (lga) query.lga = lga;
    return this.postModel.find(query).sort({ createdAt: -1 }).exec();
  }
}
