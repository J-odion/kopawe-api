import { Injectable } from '@nestjs/common';
import { IdentityService } from '../identity/identity.service';
import { FinanceService } from '../finance/finance.service';
import { LedgerService } from '../finance/ledger.service';

@Injectable()
export class CreditService {
  constructor(
    private identityService: IdentityService,
    private financeService: FinanceService,
    private ledgerService: LedgerService,
  ) {}

  async calculateScore(memberId: string): Promise<{ score: number; rating: string; reason: string[] }> {
    const member = await this.identityService.getProfile(memberId);
    const wallet = await this.financeService.getWallet(memberId);
    const ledger = await this.ledgerService.getLedger(memberId);
    const loans = await this.financeService.getLoans(memberId);

    let score = 300; // Base score
    const reasons: string[] = [];

    // 1. Identity Multiplier
    if (member.isVerified) {
      score += 150;
      reasons.push('Verified NYSC Identity (+150)');
    }

    // 2. Financial Stability (Balance)
    if (wallet.balance > 50000) {
      score += 100;
      reasons.push('Healthy wallet balance (+100)');
    } else if (wallet.balance > 10000) {
      score += 50;
      reasons.push('Consistent wallet balance (+50)');
    }

    // 3. Transaction Behavior (Volume)
    if (ledger.length > 10) {
      score += 50;
      reasons.push('High transaction activity (+50)');
    }

    // 4. Repayment Reliability
    const defaulted = loans.some(l => l.status === 'DEFAULTED');
    if (defaulted) {
      score -= 200;
      reasons.push('Previous loan default (-200)');
    } else if (loans.length > 0) {
      const allRepaid = loans.every(l => l.status === 'REPAID' || l.status === 'DISBURSED');
      if (allRepaid) {
        score += 100;
        reasons.push('Perfect repayment history (+100)');
      }
    }

    // Cap score at 850
    score = Math.min(score, 850);
    score = Math.max(score, 300);

    let rating = 'Bronze';
    if (score >= 700) rating = 'Platinum';
    else if (score >= 600) rating = 'Gold';
    else if (score >= 450) rating = 'Silver';

    return { score, rating, reason: reasons };
  }
}
