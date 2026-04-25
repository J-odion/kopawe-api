import { InsuranceService } from './insurance.service';
export declare class InsuranceController {
    private readonly insuranceService;
    constructor(insuranceService: InsuranceService);
    getPlans(): Promise<{
        id: string;
        name: string;
        price: number;
    }[]>;
    subscribe(): Promise<{
        status: string;
    }>;
}
