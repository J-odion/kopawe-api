import { CreditService } from './credit.service';
export declare class CreditController {
    private readonly creditService;
    constructor(creditService: CreditService);
    getScore(memberId: string): Promise<{
        score: number;
        rating: string;
        reason: string[];
    }>;
}
