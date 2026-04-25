import { Model } from 'mongoose';
import { Announcement } from './schemas/announcement.schema';
import { SupportTicket } from './schemas/ticket.schema';
import { IdentityService } from '../identity/identity.service';
export declare class AdminService {
    private announcementModel;
    private ticketModel;
    private identityService;
    constructor(announcementModel: Model<Announcement>, ticketModel: Model<SupportTicket>, identityService: IdentityService);
    createTicket(memberId: string, data: any): Promise<SupportTicket>;
    getTickets(): Promise<SupportTicket[]>;
    createAnnouncement(data: any): Promise<Announcement>;
    getAnnouncements(): Promise<Announcement[]>;
    getSystemStats(): Promise<any>;
}
