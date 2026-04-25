import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';
import { Wallet, WalletSchema, Loan, LoanSchema } from './schemas/finance.schema';
import { LedgerEntry, LedgerEntrySchema, TransactionRecord, TransactionRecordSchema } from './schemas/ledger.schema';
import { WelfareModule } from '../welfare/welfare.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Wallet.name, schema: WalletSchema },
      { name: Loan.name, schema: LoanSchema },
      { name: LedgerEntry.name, schema: LedgerEntrySchema },
      { name: TransactionRecord.name, schema: TransactionRecordSchema },
    ]),
    WelfareModule,
  ],
  controllers: [FinanceController],
  providers: [FinanceService, LedgerService],
  exports: [FinanceService, LedgerService],
})
export class FinanceModule {}
