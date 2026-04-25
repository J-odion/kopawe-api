import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './insurance.service';

describe('InsuranceController', () => {
  let controller: InsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceController],
      providers: [
        {
          provide: InsuranceService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<InsuranceController>(InsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
