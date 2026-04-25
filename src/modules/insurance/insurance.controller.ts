import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { InsuranceService } from './insurance.service';

@ApiTags('Insurance')
@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Get('plans')
  @ApiOperation({ summary: 'Get micro-insurance plans' })
  async getPlans() {
    return [
      { id: 'health-basic', name: 'Health Micro-insurance', price: 2000 },
      { id: 'device-plus', name: 'Device Insurance', price: 1500 },
    ];
  }

  @Post('subscribe')
  @ApiOperation({ summary: 'Subscribe to an insurance plan' })
  async subscribe() {
    return { status: 'Subscribed' };
  }
}
