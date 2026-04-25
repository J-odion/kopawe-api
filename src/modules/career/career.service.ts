import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Job } from './schemas/career.schema';
import { AcademyCourse, CounselingSession } from './schemas/academy.schema';

@Injectable()
export class CareerService {
  constructor(
    @InjectModel(Job.name) private jobModel: Model<Job>,
    @InjectModel(AcademyCourse.name) private academyModel: Model<AcademyCourse>,
    @InjectModel(CounselingSession.name) private counselingModel: Model<CounselingSession>,
  ) {}

  async createJob(data: any): Promise<Job> {
    const job = new this.jobModel(data);
    return job.save();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  // Kopa Academy
  async createCourse(data: any): Promise<AcademyCourse> {
    return new this.academyModel(data).save();
  }

  async getCourses(category?: string): Promise<AcademyCourse[]> {
    const query = category ? { category } : {};
    return this.academyModel.find(query).exec();
  }

  // Counseling
  async bookCounseling(memberId: string, data: any): Promise<CounselingSession> {
    return new this.counselingModel({
      ...data,
      memberId: new Types.ObjectId(memberId),
    }).save();
  }

  async getSessions(memberId: string): Promise<CounselingSession[]> {
    return this.counselingModel.find({ memberId: new Types.ObjectId(memberId) }).exec();
  }
}
