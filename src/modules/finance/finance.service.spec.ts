import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';
import { Wallet, Loan } from './schemas/finance.schema';
import { mockModel } from '../../../test/mock-model';

describe('FinanceService', () => {
  let service: FinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FinanceService,
        {
          provide: getModelToken(Wallet.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(Loan.name),
          useValue: mockModel,
        },
        {
          provide: LedgerService,
          useValue: {
            executeTransfer: jest.fn(),
            getLedger: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FinanceService>(FinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
