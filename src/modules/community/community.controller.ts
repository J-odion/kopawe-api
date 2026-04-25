import { Controller, Post, Get, Body, Param, Query, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { CommunityPost, PostCategory, PostType } from './schemas/post.schema';

@ApiTags('Community & Social')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post('post/:authorId')
  @ApiOperation({ summary: 'Create a new post (News, Sports, Religious, etc.)' })
  async create(@Param('authorId') authorId: string, @Body() data: any) {
    return this.communityService.createPost(authorId, data);
  }

  @Get('feed')
  @ApiOperation({ summary: 'Get state-based regional feed' })
  @ApiQuery({ name: 'state', required: false })
  @ApiQuery({ name: 'category', enum: PostCategory, required: false })
  async getFeed(
    @Query('state') state?: string,
    @Query('category') category?: string,
    @Query('lga') lga?: string,
  ) {
    return this.communityService.getFeed(state, category, lga);
  }

  @Post('comment/:postId/:authorId')
  @ApiOperation({ summary: 'Add a comment to a post' })
  async addComment(
    @Param('postId') postId: string,
    @Param('authorId') authorId: string,
    @Body() data: any,
  ) {
    return this.communityService.createPost(authorId, { ...data, parentId: postId });
  }

  @Get('comments/:postId')
  @ApiOperation({ summary: 'Get comments for a post' })
  async getComments(@Param('postId') postId: string) {
    return this.communityService.getComments(postId);
  }

  @Patch('upvote/:postId/:memberId')
  @ApiOperation({ summary: 'Upvote a post' })
  async upvote(@Param('postId') postId: string, @Param('memberId') memberId: string) {
    return this.communityService.upvote(postId, memberId);
  }

  @Post('poll')
  @ApiOperation({ summary: 'Create a live poll' })
  async createPoll(@Body() data: any) {
    return this.communityService.createPoll(data);
  }

  @Post('rsvp/:eventId/:memberId')
  @ApiOperation({ summary: 'RSVP to a Meet & Greet event' })
  async rsvp(@Param('eventId') eventId: string, @Param('memberId') memberId: string) {
    return this.communityService.rsvpEvent(eventId, memberId);
  }
}
