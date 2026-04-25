import { AdminService } from './admin.service';
import { Announcement } from './schemas/announcement.schema';
declare class CreateAnnouncementDto {
    title: string;
    content: string;
    targetAudience: string;
    type: string;
}
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    createAnnouncement(dto: CreateAnnouncementDto): Promise<Announcement>;
    getAnnouncements(): Promise<Announcement[]>;
    getStats(): Promise<any>;
    createTicket(id: string, dto: {
        subject: string;
        description: string;
    }): Promise<import("./schemas/ticket.schema").SupportTicket>;
    getTickets(): Promise<import("./schemas/ticket.schema").SupportTicket[]>;
    getEngagementStats(): Promise<{
        activeMembers: number;
        verifiedPercentage: number;
        totalPosts: number;
        totalTransfers: number;
        mostActiveState: string;
    }>;
}
export {};
