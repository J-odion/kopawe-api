import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { EscrowService } from './escrow.service';
import { FinanceService } from '../finance/finance.service';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
import { mockModel } from '../../../test/mock-model';

describe('EscrowService', () => {
  let service: EscrowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EscrowService,
        {
          provide: getModelToken(EscrowTransaction.name),
          useValue: mockModel,
        },
        {
          provide: FinanceService,
          useValue: { getWallet: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<EscrowService>(EscrowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
