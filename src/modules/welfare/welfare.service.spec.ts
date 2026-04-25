import { Test, TestingModule } from '@nestjs/testing';
import { WelfareService } from './welfare.service';

describe('WelfareService', () => {
  let service: WelfareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WelfareService],
    }).compile();

    service = module.get<WelfareService>(WelfareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
