import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Announcement, AnnouncementSchema } from './schemas/announcement.schema';
import { SupportTicket, SupportTicketSchema } from './schemas/ticket.schema';
import { IdentityModule } from '../identity/identity.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Announcement.name, schema: AnnouncementSchema },
      { name: SupportTicket.name, schema: SupportTicketSchema },
    ]),
    IdentityModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
