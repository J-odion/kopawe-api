import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CareerService } from './career.service';
import { Job } from './schemas/career.schema';
import { AcademyCourse, CounselingSession } from './schemas/academy.schema';
import { mockModel } from '../../../test/mock-model';

describe('CareerService', () => {
  let service: CareerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CareerService,
        {
          provide: getModelToken(Job.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(AcademyCourse.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(CounselingSession.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<CareerService>(CareerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
