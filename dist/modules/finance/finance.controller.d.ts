import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';
import { Wallet, Loan } from './schemas/finance.schema';
import { LedgerEntry } from './schemas/ledger.schema';
declare class RequestLoanDto {
    amount: number;
    purpose: string;
}
declare class TransferDto {
    toMemberId: string;
    amount: number;
    description: string;
}
export declare class FinanceController {
    private readonly financeService;
    private readonly ledgerService;
    constructor(financeService: FinanceService, ledgerService: LedgerService);
    getWallet(memberId: string): Promise<Wallet>;
    transfer(fromMemberId: string, dto: TransferDto): Promise<import("./schemas/ledger.schema").TransactionRecord>;
    toSavings(id: string, dto: {
        amount: number;
        isGroup?: boolean;
    }): Promise<Wallet>;
    toggleLock(id: string, dto: {
        isLocked: boolean;
    }): Promise<Wallet>;
    requestLoan(memberId: string, requestLoanDto: RequestLoanDto): Promise<Loan>;
    getLoans(memberId: string): Promise<Loan[]>;
    getLedger(memberId: string): Promise<LedgerEntry[]>;
}
export {};
