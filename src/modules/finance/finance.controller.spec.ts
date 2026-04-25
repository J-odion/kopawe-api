import { Test, TestingModule } from '@nestjs/testing';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';

describe('FinanceController', () => {
  let controller: FinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceController],
      providers: [
        {
          provide: FinanceService,
          useValue: {
            getWallet: jest.fn(),
            requestLoan: jest.fn(),
            getLoans: jest.fn(),
            moveFundsToSavings: jest.fn(),
            toggleWalletLock: jest.fn(),
          },
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

    controller = module.get<FinanceController>(FinanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
