import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { MarketplaceService } from './marketplace.service';
import { Product } from './schemas/marketplace.schema';
import { mockModel } from '../../../test/mock-model';

describe('MarketplaceService', () => {
  let service: MarketplaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarketplaceService,
        {
          provide: getModelToken(Product.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<MarketplaceService>(MarketplaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
