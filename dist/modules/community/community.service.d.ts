import { Model } from 'mongoose';
import { CommunityPost } from './schemas/post.schema';
export declare class CommunityService {
    private postModel;
    constructor(postModel: Model<CommunityPost>);
    createPost(authorId: string, data: any): Promise<CommunityPost>;
    getRegionalFeed(state: string, lga?: string): Promise<CommunityPost[]>;
}
