import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommunityPost, Poll, CommunityEvent, PostType } from './schemas/post.schema';
import { IdentityService } from '../identity/identity.service';

@Injectable()
export class CommunityService {
  constructor(
    @InjectModel(CommunityPost.name) private postModel: Model<CommunityPost>,
    @InjectModel(Poll.name) private pollModel: Model<Poll>,
    @InjectModel(CommunityEvent.name) private eventModel: Model<CommunityEvent>,
    private identityService: IdentityService,
  ) {}

  async createPost(authorId: string, data: any): Promise<CommunityPost> {
    const member = await this.identityService.getProfile(authorId);

    // Enforce Verification Rules
    if (data.type === PostType.OFFICIAL && !member.isAdmin) {
      throw new ForbiddenException('Only NYSC Admins can post official news');
    }
    if (data.type === PostType.VERIFIED && !member.isVerified) {
      throw new ForbiddenException('Only verified members can post verified content');
    }

    const post = new this.postModel({
      ...data,
      authorId: new Types.ObjectId(authorId),
    });
    return post.save();
  }

  async getFeed(state?: string, category?: string, lga?: string): Promise<CommunityPost[]> {
    const query: any = { parentId: null }; // Only top-level posts
    if (state) query.state = state;
    if (lga) query.lga = lga;
    if (category) query.category = category;

    return this.postModel
      .find(query)
      .populate('authorId', 'fullName stateCode isVerified')
      .sort({ createdAt: -1 })
      .exec();
  }

  async getComments(postId: string): Promise<CommunityPost[]> {
    return this.postModel
      .find({ parentId: new Types.ObjectId(postId) })
      .populate('authorId', 'fullName isVerified')
      .sort({ createdAt: 1 })
      .exec();
  }

  async upvote(postId: string, memberId: string): Promise<void> {
    await this.postModel.updateOne(
      { _id: new Types.ObjectId(postId) },
      { $addToSet: { upvotes: new Types.ObjectId(memberId) } }
    );
  }

  async createPoll(data: any): Promise<Poll> {
    const poll = new this.pollModel(data);
    return poll.save();
  }

  async rsvpEvent(eventId: string, memberId: string): Promise<void> {
    await this.eventModel.updateOne(
      { _id: new Types.ObjectId(eventId) },
      { $addToSet: { rsvps: new Types.ObjectId(memberId) } }
    );
  }
}
