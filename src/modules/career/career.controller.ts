import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CareerService } from './career.service';

@ApiTags('Career & Academy')
@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Post('job')
  @ApiOperation({ summary: 'Post a new job listing' })
  async createJob(@Body() data: any) {
    return this.careerService.createJob(data);
  }

  @Get('jobs')
  @ApiOperation({ summary: 'Find all jobs' })
  async findAll() {
    return this.careerService.findAll();
  }

  @Post('academy/course')
  @ApiOperation({ summary: 'Create a Kopa Academy course/webinar' })
  async createCourse(@Body() data: any) {
    return this.careerService.createCourse(data);
  }

  @Get('academy/courses')
  @ApiOperation({ summary: 'Get academy courses' })
  @ApiQuery({ name: 'category', required: false })
  async getCourses(@Query('category') category?: string) {
    return this.careerService.getCourses(category);
  }

  @Post('counseling/book/:memberId')
  @ApiOperation({ summary: 'Book a counseling session' })
  async book(@Param('memberId') memberId: string, @Body() data: any) {
    return this.careerService.bookCounseling(memberId, data);
  }

  @Get('counseling/sessions/:memberId')
  @ApiOperation({ summary: 'Get member counseling sessions' })
  async getSessions(@Param('memberId') memberId: string) {
    return this.careerService.getSessions(memberId);
  }
}
