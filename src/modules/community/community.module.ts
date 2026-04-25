import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { CommunityPost, CommunityPostSchema } from './schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CommunityPost.name, schema: CommunityPostSchema }]),
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
