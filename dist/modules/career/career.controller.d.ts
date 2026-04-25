import { CareerService } from './career.service';
export declare class CareerController {
    private readonly careerService;
    constructor(careerService: CareerService);
    getJobs(): Promise<{
        id: number;
        title: string;
        company: string;
    }[]>;
    apply(): Promise<{
        status: string;
    }>;
}
