import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Wallet, Loan } from './schemas/finance.schema';
import { LedgerService } from './ledger.service';
import { TransactionType } from './schemas/ledger.schema';

@Injectable()
export class FinanceService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>,
    @InjectModel(Loan.name) private loanModel: Model<Loan>,
    private ledgerService: LedgerService,
  ) {}

  async getWallet(memberId: string): Promise<Wallet> {
    let wallet = await this.walletModel.findOne({ memberId: new Types.ObjectId(memberId) }).exec();
    if (!wallet) {
      wallet = new this.walletModel({ memberId: new Types.ObjectId(memberId), balance: 0 });
      await wallet.save();
    }
    return wallet;
  }

  async requestLoan(memberId: string, amount: number, purpose: string): Promise<Loan> {
    if (amount < 1000 || amount > 100000) {
      throw new BadRequestException('Loan amount must be between ₦1k and ₦100k');
    }

    const wallet = await this.getWallet(memberId);
    if (wallet.isLocked) throw new BadRequestException('Wallet is locked');

    const interest = amount * 0.1;
    const repaymentDate = new Date();
    repaymentDate.setMonth(repaymentDate.getMonth() + 1);

    // Generate Repayment Schedule (Monthly split for demo)
    const repaymentSchedule = [
      { date: repaymentDate, amount: amount + interest, status: 'PENDING' }
    ];

    const loan = new this.loanModel({
      memberId: new Types.ObjectId(memberId),
      amount,
      interest,
      repaymentDate,
      repaymentSchedule,
      purpose,
      status: 'APPROVED',
    });

    await loan.save();

    // Disburse to wallet via Ledger (System -> Member)
    await this.ledgerService.executeTransfer(
      null,
      memberId,
      amount,
      TransactionType.LOAN_DISBURSEMENT,
      `Allawee Advance: ${purpose}`,
      { loanId: loan._id }
    );

    return loan;
  }

  async toggleWalletLock(memberId: string, isLocked: boolean): Promise<Wallet> {
    const wallet = await this.getWallet(memberId);
    wallet.isLocked = isLocked;
    return wallet.save();
  }

  async moveFundsToSavings(memberId: string, amount: number, isGroup: boolean = false): Promise<Wallet> {
    const wallet = await this.getWallet(memberId);
    if (wallet.balance < amount) throw new BadRequestException('Insufficient balance');

    wallet.balance -= amount;
    if (isGroup) {
      wallet.groupSavingsBalance += amount;
    } else {
      wallet.savingsBalance += amount;
    }
    
    return wallet.save();
  }

  async getLoans(memberId: string): Promise<Loan[]> {
    return this.loanModel.find({ memberId: new Types.ObjectId(memberId) }).exec();
  }
}
