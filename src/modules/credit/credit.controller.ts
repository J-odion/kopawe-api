import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreditService } from './credit.service';

@ApiTags('Credit System')
@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Get('score/:memberId')
  @ApiOperation({ summary: 'Get proprietary credit score for a member' })
  @ApiResponse({ status: 200, description: 'Credit score calculated' })
  async getScore(@Param('memberId') memberId: string) {
    return this.creditService.calculateScore(memberId);
  }
}
