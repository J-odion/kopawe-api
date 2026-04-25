import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CommunityService } from './community.service';
import { CommunityPost, Poll, CommunityEvent } from './schemas/post.schema';
import { IdentityService } from '../identity/identity.service';
import { mockModel } from '../../../test/mock-model';

describe('CommunityService', () => {
  let service: CommunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommunityService,
        {
          provide: getModelToken(CommunityPost.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(Poll.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(CommunityEvent.name),
          useValue: mockModel,
        },
        {
          provide: IdentityService,
          useValue: {
            getProfile: jest.fn().mockResolvedValue({ isVerified: true, isAdmin: false }),
          },
        },
      ],
    }).compile();

    service = module.get<CommunityService>(CommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
