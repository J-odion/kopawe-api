import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { Job, JobSchema } from './schemas/career.schema';
import { AcademyCourse, AcademyCourseSchema, CounselingSession, CounselingSessionSchema } from './schemas/academy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Job.name, schema: JobSchema },
      { name: AcademyCourse.name, schema: AcademyCourseSchema },
      { name: CounselingSession.name, schema: CounselingSessionSchema },
    ]),
  ],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareerModule {}
