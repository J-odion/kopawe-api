import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WelfareController } from './welfare.controller';
import { WelfareService } from './welfare.service';
import { WelfareFund, WelfareFundSchema, WelfareRequest, WelfareRequestSchema } from './schemas/welfare.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WelfareFund.name, schema: WelfareFundSchema },
      { name: WelfareRequest.name, schema: WelfareRequestSchema },
    ]),
  ],
  controllers: [WelfareController],
  providers: [WelfareService],
  exports: [WelfareService],
})
export class WelfareModule {}
