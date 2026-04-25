import { IdentityService } from '../identity/identity.service';
import { FinanceService } from '../finance/finance.service';
import { LedgerService } from '../finance/ledger.service';
export declare class CreditService {
    private identityService;
    private financeService;
    private ledgerService;
    constructor(identityService: IdentityService, financeService: FinanceService, ledgerService: LedgerService);
    calculateScore(memberId: string): Promise<{
        score: number;
        rating: string;
        reason: string[];
    }>;
}
