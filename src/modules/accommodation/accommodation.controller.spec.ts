import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationController } from './accommodation.controller';
import { AccommodationService } from './accommodation.service';

describe('AccommodationController', () => {
  let controller: AccommodationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccommodationController],
      providers: [
        {
          provide: AccommodationService,
          useValue: {
            createListing: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AccommodationController>(AccommodationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
