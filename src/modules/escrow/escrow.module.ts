import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { EscrowTransaction, EscrowTransactionSchema } from '../marketplace/schemas/marketplace.schema';
import { FinanceModule } from '../finance/finance.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EscrowTransaction.name, schema: EscrowTransactionSchema }]),
    FinanceModule,
  ],
  controllers: [EscrowController],
  providers: [EscrowService],
  exports: [EscrowService],
})
export class EscrowModule {}
