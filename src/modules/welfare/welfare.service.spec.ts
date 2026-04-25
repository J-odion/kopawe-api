import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { WelfareService } from './welfare.service';
import { WelfareFund, WelfareRequest } from './schemas/welfare.schema';
import { mockModel } from '../../../test/mock-model';

describe('WelfareService', () => {
  let service: WelfareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WelfareService,
        {
          provide: getModelToken(WelfareFund.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(WelfareRequest.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<WelfareService>(WelfareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
