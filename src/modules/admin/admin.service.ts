import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Announcement } from './schemas/announcement.schema';
import { SupportTicket } from './schemas/ticket.schema';
import { IdentityService } from '../identity/identity.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Announcement.name) private announcementModel: Model<Announcement>,
    @InjectModel(SupportTicket.name) private ticketModel: Model<SupportTicket>,
    private identityService: IdentityService,
  ) {}

  async createTicket(memberId: string, data: any): Promise<SupportTicket> {
    const ticket = new this.ticketModel({
      ...data,
      memberId: new Types.ObjectId(memberId),
    });
    return ticket.save();
  }

  async getTickets(): Promise<SupportTicket[]> {
    return this.ticketModel.find().populate('memberId').exec();
  }

  async createAnnouncement(data: any): Promise<Announcement> {
    const announcement = new this.announcementModel(data);
    return announcement.save();
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return this.announcementModel.find().sort({ createdAt: -1 }).exec();
  }

  async getSystemStats(): Promise<any> {
    // Mock statistics for NYSC dashboard
    return {
      totalCorpsMembers: 150230,
      verifiedPercentage: 92,
      activeLoans: 4500,
      totalDisbursed: 250000000,
      topLga: 'Ikeja',
    };
  }
}
