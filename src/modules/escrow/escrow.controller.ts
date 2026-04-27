import { Controller, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { EscrowService } from './escrow.service';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
import { IsString, IsNumber } from 'class-validator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

class CreateEscrowDto {
  @ApiProperty({ 
    description: 'The unique ID of the product being purchased',
    example: '662a5b...' 
  })
  @IsString()
  productId: string;

  @ApiProperty({ 
    description: 'The unique ID of the seller',
    example: '662a5b...' 
  })
  @IsString()
  sellerId: string;

  @ApiProperty({ 
    description: 'The agreed price to be held in escrow',
    example: 15000 
  })
  @IsNumber()
  amount: number;
}

@ApiTags('Safetrade (Escrow)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('safetrade')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post('initiate')
  @ApiOperation({ summary: 'Initiate a Safetrade escrow transaction' })
  @ApiResponse({ status: 201, description: 'Escrow initiated', type: EscrowTransaction })
  async initiate(@CurrentUser('id') buyerId: string, @Body() dto: CreateEscrowDto) {
    return this.escrowService.createEscrow(buyerId, dto.sellerId, dto.productId, dto.amount);
  }

  @Patch('release/:escrowId')
  @ApiOperation({ summary: 'Release funds from escrow to seller' })
  @ApiResponse({ status: 200, description: 'Funds released', type: EscrowTransaction })
  async release(@Param('escrowId') escrowId: string) {
    return this.escrowService.releaseFunds(escrowId);
  }
}
