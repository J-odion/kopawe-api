import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { Announcement } from './schemas/announcement.schema';
import { IsString } from 'class-validator';

class CreateAnnouncementDto {
  @ApiProperty({ example: 'NYSC Pop-up Event' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Join us for the digital skill-up session.' })
  @IsString()
  content: string;

  @ApiProperty({ example: 'LAGOS' })
  @IsString()
  targetAudience: string;

  @ApiProperty({ example: 'INFO' })
  @IsString()
  type: string;
}

@ApiTags('NYSC Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('announcements')
  @ApiOperation({ summary: 'Send a broadcast announcement to members' })
  @ApiResponse({ status: 201, description: 'Announcement sent', type: Announcement })
  async createAnnouncement(@Body() dto: CreateAnnouncementDto) {
    return this.adminService.createAnnouncement(dto);
  }

  @Get('announcements')
  @ApiOperation({ summary: 'Get all announcements' })
  @ApiResponse({ status: 200, description: 'List of announcements', type: [Announcement] })
  async getAnnouncements() {
    return this.adminService.getAnnouncements();
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get system-wide stats for NYSC officials' })
  @ApiResponse({ status: 200, description: 'System statistics retrieved' })
  async getStats() {
    return this.adminService.getSystemStats();
  }

  @Post('tickets/:memberId')
  @ApiOperation({ summary: 'Create a new support ticket/complaint' })
  async createTicket(@Param('memberId') id: string, @Body() dto: { subject: string; description: string }) {
    return this.adminService.createTicket(id, dto);
  }

  @Get('tickets')
  @ApiOperation({ summary: 'Get all support tickets (Admin only)' })
  async getTickets() {
    return this.adminService.getTickets();
  }
}
