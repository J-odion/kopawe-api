import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AdminService } from './admin.service';
import { IdentityService } from '../identity/identity.service';
import { Announcement } from './schemas/announcement.schema';
import { SupportTicket } from './schemas/ticket.schema';
import { mockModel } from '../../../test/mock-model';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        {
          provide: getModelToken(Announcement.name),
          useValue: mockModel,
        },
        {
          provide: getModelToken(SupportTicket.name),
          useValue: mockModel,
        },
        {
          provide: IdentityService,
          useValue: {
            getProfile: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
