import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, ClientSession } from 'mongoose';
import { LedgerEntry, TransactionRecord, TransactionType, AccountType } from './schemas/ledger.schema';
import { Wallet } from './schemas/finance.schema';
import { WelfareService } from '../welfare/welfare.service';

@Injectable()
export class LedgerService {
  constructor(
    @InjectModel(LedgerEntry.name) private ledgerModel: Model<LedgerEntry>,
    @InjectModel(TransactionRecord.name) private transactionModel: Model<TransactionRecord>,
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>,
    private welfareService: WelfareService,
  ) {}

  /**
   * Executes an atomic transfer between two members/accounts
   */
  async executeTransfer(
    fromMemberId: string | null,
    toMemberId: string | null,
    amount: number,
    type: TransactionType,
    description: string,
    metadata: any = {},
  ): Promise<TransactionRecord> {
    const transaction = new this.transactionModel({
      type,
      amount,
      fromMemberId: fromMemberId ? new Types.ObjectId(fromMemberId) : null,
      toMemberId: toMemberId ? new Types.ObjectId(toMemberId) : null,
      status: 'PENDING',
      metadata,
    });

    const savedTransaction = await transaction.save();

    try {
      // 1. Debit Source (if exists)
      if (fromMemberId) {
        await this.postEntry(
          savedTransaction._id as Types.ObjectId,
          fromMemberId,
          -amount,
          AccountType.MAIN,
          `Debit: ${description}`
        );
      }

      // 2. Credit Destination (if exists)
      if (toMemberId) {
        await this.postEntry(
          savedTransaction._id as Types.ObjectId,
          toMemberId,
          amount,
          AccountType.MAIN,
          `Credit: ${description}`
        );
      }

      savedTransaction.status = 'SUCCESS';
      await savedTransaction.save();

      // Contribute 1% to Welfare Fund
      await this.welfareService.contributeToFund(amount);

      return savedTransaction;

    } catch (error) {
      savedTransaction.status = 'FAILED';
      savedTransaction.metadata = { ...savedTransaction.metadata, error: error.message };
      await savedTransaction.save();
      throw error;
    }
  }

  private async postEntry(
    transactionId: Types.ObjectId,
    memberId: string,
    amount: number,
    accountType: AccountType,
    description: string
  ) {
    // Find or create wallet
    let wallet = await this.walletModel.findOne({ memberId: new Types.ObjectId(memberId) });
    if (!wallet) {
      wallet = new this.walletModel({ memberId: new Types.ObjectId(memberId), balance: 0 });
    }

    // Check balance for debits
    if (amount < 0 && wallet.balance + amount < 0) {
      throw new BadRequestException(`Insufficient funds in ${accountType} account`);
    }

    wallet.balance += amount;
    await wallet.save();

    const entry = new this.ledgerModel({
      transactionId,
      memberId: new Types.ObjectId(memberId),
      accountType,
      amount,
      balanceAfter: wallet.balance,
      description,
    });

    await entry.save();
  }

  async getLedger(memberId: string): Promise<LedgerEntry[]> {
    return this.ledgerModel.find({ memberId: new Types.ObjectId(memberId) }).sort({ createdAt: -1 }).exec();
  }
}
