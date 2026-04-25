import { Model } from 'mongoose';
import { Wallet, Loan } from './schemas/finance.schema';
import { LedgerService } from './ledger.service';
export declare class FinanceService {
    private walletModel;
    private loanModel;
    private ledgerService;
    constructor(walletModel: Model<Wallet>, loanModel: Model<Loan>, ledgerService: LedgerService);
    getWallet(memberId: string): Promise<Wallet>;
    requestLoan(memberId: string, amount: number, purpose: string): Promise<Loan>;
    toggleWalletLock(memberId: string, isLocked: boolean): Promise<Wallet>;
    moveFundsToSavings(memberId: string, amount: number, isGroup?: boolean): Promise<Wallet>;
    getLoans(memberId: string): Promise<Loan[]>;
}
