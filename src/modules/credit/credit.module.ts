import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { IdentityModule } from '../identity/identity.module';
import { FinanceModule } from '../finance/finance.module';

@Module({
  imports: [IdentityModule, FinanceModule],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
