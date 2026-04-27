import { Model } from 'mongoose';
import { CommunityPost, Poll, CommunityEvent } from './schemas/post.schema';
import { IdentityService } from '../identity/identity.service';
export declare class CommunityService {
    private postModel;
    private pollModel;
    private eventModel;
    private identityService;
    constructor(postModel: Model<CommunityPost>, pollModel: Model<Poll>, eventModel: Model<CommunityEvent>, identityService: IdentityService);
    createPost(authorId: string, data: any): Promise<CommunityPost>;
    getFeed(state?: string, category?: string, lga?: string, page?: number, limit?: number): Promise<{
        data: CommunityPost[];
        meta: any;
    }>;
    getComments(postId: string): Promise<CommunityPost[]>;
    upvote(postId: string, memberId: string): Promise<void>;
    createPoll(data: any): Promise<Poll>;
    rsvpEvent(eventId: string, memberId: string): Promise<void>;
}
