import { CareerService } from './career.service';
export declare class CareerController {
    private readonly careerService;
    constructor(careerService: CareerService);
    createJob(data: any): Promise<import("./schemas/career.schema").Job>;
    findAll(): Promise<import("./schemas/career.schema").Job[]>;
    createCourse(data: any): Promise<import("./schemas/academy.schema").AcademyCourse>;
    getCourses(category?: string): Promise<import("./schemas/academy.schema").AcademyCourse[]>;
    book(memberId: string, data: any): Promise<import("./schemas/academy.schema").CounselingSession>;
    getSessions(memberId: string): Promise<import("./schemas/academy.schema").CounselingSession[]>;
}
