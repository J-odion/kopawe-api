import { Test, TestingModule } from '@nestjs/testing';
import { WelfareController } from './welfare.controller';
import { WelfareService } from './welfare.service';

describe('WelfareController', () => {
  let controller: WelfareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WelfareController],
      providers: [
        {
          provide: WelfareService,
          useValue: {
            getFundStatus: jest.fn(),
            createRequest: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<WelfareController>(WelfareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
