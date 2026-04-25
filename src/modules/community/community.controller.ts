import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { CommunityPost } from './schemas/post.schema';
import { IsString, IsArray, IsOptional } from 'class-validator';

class CreatePostDto {
  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  lga: string;

  @ApiProperty({ required: false })
  @IsArray()
  @IsOptional()
  images?: string[];
}

@ApiTags('Community & Social')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post('post/:authorId')
  @ApiOperation({ summary: 'Create a new community post' })
  async create(@Param('authorId') authorId: string, @Body() dto: CreatePostDto) {
    return this.communityService.createPost(authorId, dto);
  }

  @Get('feed')
  @ApiOperation({ summary: 'Get regional community feed' })
  async getFeed(@Query('state') state: string, @Query('lga') lga?: string) {
    return this.communityService.getRegionalFeed(state, lga);
  }
}
