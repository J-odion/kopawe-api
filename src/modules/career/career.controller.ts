import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { CareerService } from './career.service';

class CreateJobDto {
  @ApiProperty({ example: 'Software Intern' })
  title: string;
  @ApiProperty({ example: 'Tech Corp' })
  company: string;
}

@ApiTags('Career & Transitions')
@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Get('jobs')
  @ApiOperation({ summary: 'List available jobs and internships' })
  async getJobs() {
    return [{ id: 1, title: 'Graduate Trainee', company: 'Global Bank' }];
  }

  @Post('apply/:jobId')
  @ApiOperation({ summary: 'Apply for a job' })
  async apply() {
    return { status: 'Application Submitted' };
  }
}
