import { Test, TestingModule } from '@nestjs/testing';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';

describe('EscrowController', () => {
  let controller: EscrowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscrowController],
      providers: [
        {
          provide: EscrowService,
          useValue: {
            initiateEscrow: jest.fn(),
            releaseFunds: jest.fn(),
            disputeEscrow: jest.fn(),
            getEscrowDetails: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EscrowController>(EscrowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
