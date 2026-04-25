import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { IdentityService } from './identity.service';
import { Member } from './schemas/member.schema';

describe('IdentityService', () => {
  let service: IdentityService;

  const mockMemberModel = {
    findOne: jest.fn(),
    findById: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdentityService,
        {
          provide: getModelToken(Member.name),
          useValue: mockMemberModel,
        },
      ],
    }).compile();

    service = module.get<IdentityService>(IdentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
