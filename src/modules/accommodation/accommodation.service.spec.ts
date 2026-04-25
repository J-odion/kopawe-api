import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { mockModel } from '../../../test/mock-model';

describe('AccommodationService', () => {
  let service: AccommodationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccommodationService,
        {
          provide: getModelToken(Accommodation.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<AccommodationService>(AccommodationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
