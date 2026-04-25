import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { CommunityPost, CommunityPostSchema, Poll, PollSchema, CommunityEvent, CommunityEventSchema } from './schemas/post.schema';
import { IdentityModule } from '../identity/identity.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommunityPost.name, schema: CommunityPostSchema },
      { name: Poll.name, schema: PollSchema },
      { name: CommunityEvent.name, schema: CommunityEventSchema },
    ]),
    IdentityModule,
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
  exports: [CommunityService],
})
export class CommunityModule {}
