import { CommunityService } from './community.service';
import { CommunityPost } from './schemas/post.schema';
export declare class CommunityController {
    private readonly communityService;
    constructor(communityService: CommunityService);
    create(authorId: string, data: any): Promise<CommunityPost>;
    getFeed(state?: string, category?: string, lga?: string): Promise<CommunityPost[]>;
    addComment(postId: string, authorId: string, data: any): Promise<CommunityPost>;
    getComments(postId: string): Promise<CommunityPost[]>;
    upvote(postId: string, memberId: string): Promise<void>;
    createPoll(data: any): Promise<import("./schemas/post.schema").Poll>;
    rsvp(eventId: string, memberId: string): Promise<void>;
}
