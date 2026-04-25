import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { WelfareService } from './welfare.service';
import { WelfareFund, WelfareRequest } from './schemas/welfare.schema';
import { IsNumber, IsString } from 'class-validator';

class CreateWelfareRequestDto {
  @ApiProperty({ example: 10000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'Medical emergency at PPA' })
  @IsString()
  reason: string;
}

@ApiTags('Welfare Fund')
@Controller('welfare')
export class WelfareController {
  constructor(private readonly welfareService: WelfareService) {}

  @Get('status')
  @ApiOperation({ summary: 'Get current Welfare Fund pool status' })
  @ApiResponse({ status: 200, type: WelfareFund })
  async getStatus() {
    return this.welfareService.getFundStatus();
  }

  @Post('request/:memberId')
  @ApiOperation({ summary: 'Request financial support from the Welfare Fund' })
  @ApiResponse({ status: 201, type: WelfareRequest })
  async createRequest(@Param('memberId') memberId: string, @Body() dto: CreateWelfareRequestDto) {
    return this.welfareService.createRequest(memberId, dto.amount, dto.reason);
  }
}
