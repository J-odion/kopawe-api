import { Controller, Post, Get, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { CareerService } from './career.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

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
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async findAll(@Query() query: any) {
    return this.careerService.findAll(query);
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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('counseling/book')
  @ApiOperation({ summary: 'Book a counseling session' })
  async book(@CurrentUser('id') memberId: string, @Body() data: any) {
    return this.careerService.bookCounseling(memberId, data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('counseling/sessions')
  @ApiOperation({ summary: 'Get current member counseling sessions' })
  async getSessions(@CurrentUser('id') memberId: string) {
    return this.careerService.getSessions(memberId);
  }
}
