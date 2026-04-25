import { Model } from 'mongoose';
import { Job } from './schemas/career.schema';
import { AcademyCourse, CounselingSession } from './schemas/academy.schema';
export declare class CareerService {
    private jobModel;
    private academyModel;
    private counselingModel;
    constructor(jobModel: Model<Job>, academyModel: Model<AcademyCourse>, counselingModel: Model<CounselingSession>);
    createJob(data: any): Promise<Job>;
    findAll(): Promise<Job[]>;
    createCourse(data: any): Promise<AcademyCourse>;
    getCourses(category?: string): Promise<AcademyCourse[]>;
    bookCounseling(memberId: string, data: any): Promise<CounselingSession>;
    getSessions(memberId: string): Promise<CounselingSession[]>;
}
