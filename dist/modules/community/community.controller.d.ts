import { CommunityService } from './community.service';
import { CommunityPost } from './schemas/post.schema';
declare class CreatePostDto {
    content: string;
    state: string;
    lga: string;
    images?: string[];
}
export declare class CommunityController {
    private readonly communityService;
    constructor(communityService: CommunityService);
    create(authorId: string, dto: CreatePostDto): Promise<CommunityPost>;
    getFeed(state: string, lga?: string): Promise<CommunityPost[]>;
}
export {};
