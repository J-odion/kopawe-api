import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { EscrowService } from './escrow.service';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
import { IsString, IsNumber } from 'class-validator';

class CreateEscrowDto {
  @ApiProperty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsString()
  sellerId: string;

  @ApiProperty()
  @IsNumber()
  amount: number;
}

@ApiTags('Safetrade (Escrow)')
@Controller('safetrade')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post('initiate/:buyerId')
  @ApiOperation({ summary: 'Initiate a Safetrade escrow transaction' })
  @ApiResponse({ status: 201, description: 'Escrow initiated', type: EscrowTransaction })
  async initiate(@Param('buyerId') buyerId: string, @Body() dto: CreateEscrowDto) {
    return this.escrowService.createEscrow(buyerId, dto.sellerId, dto.productId, dto.amount);
  }

  @Patch('release/:escrowId')
  @ApiOperation({ summary: 'Release funds from escrow to seller' })
  @ApiResponse({ status: 200, description: 'Funds released', type: EscrowTransaction })
  async release(@Param('escrowId') escrowId: string) {
    return this.escrowService.releaseFunds(escrowId);
  }
}
