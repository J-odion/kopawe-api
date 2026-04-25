import { Test, TestingModule } from '@nestjs/testing';
import { CreditService } from './credit.service';
import { IdentityService } from '../identity/identity.service';
import { FinanceService } from '../finance/finance.service';
import { LedgerService } from '../finance/ledger.service';

describe('CreditService', () => {
  let service: CreditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreditService,
        {
          provide: IdentityService,
          useValue: { getProfile: jest.fn() },
        },
        {
          provide: FinanceService,
          useValue: { getWallet: jest.fn(), getLoans: jest.fn() },
        },
        {
          provide: LedgerService,
          useValue: { getLedger: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<CreditService>(CreditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
