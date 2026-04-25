import { Test, TestingModule } from '@nestjs/testing';
import { WelfareController } from './welfare.controller';

describe('WelfareController', () => {
  let controller: WelfareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WelfareController],
    }).compile();

    controller = module.get<WelfareController>(WelfareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
