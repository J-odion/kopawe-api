import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdentityController } from './identity.controller';
import { IdentityService } from './identity.service';
import { Member, MemberSchema } from './schemas/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  controllers: [IdentityController],
  providers: [IdentityService],
  exports: [IdentityService],
})
export class IdentityModule {}
