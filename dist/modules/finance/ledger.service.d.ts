import { Model } from 'mongoose';
import { LedgerEntry, TransactionRecord, TransactionType } from './schemas/ledger.schema';
import { Wallet } from './schemas/finance.schema';
import { WelfareService } from '../welfare/welfare.service';
export declare class LedgerService {
    private ledgerModel;
    private transactionModel;
    private walletModel;
    private welfareService;
    constructor(ledgerModel: Model<LedgerEntry>, transactionModel: Model<TransactionRecord>, walletModel: Model<Wallet>, welfareService: WelfareService);
    executeTransfer(fromMemberId: string | null, toMemberId: string | null, amount: number, type: TransactionType, description: string, metadata?: any): Promise<TransactionRecord>;
    private postEntry;
    getLedger(memberId: string): Promise<LedgerEntry[]>;
}
