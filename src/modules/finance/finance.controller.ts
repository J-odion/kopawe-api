import { Controller, Get, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';
import { Wallet, Loan } from './schemas/finance.schema';
import { LedgerEntry, TransactionType } from './schemas/ledger.schema';
import { IsNumber, IsString } from 'class-validator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

class RequestLoanDto {
  @ApiProperty({ 
    description: 'Loan amount requested (₦1k - ₦100k)',
    example: 50000 
  })
  @IsNumber()
  amount: number;

  @ApiProperty({ 
    description: 'The reason for the loan request',
    example: 'Transport to PPA' 
  })
  @IsString()
  purpose: string;
}

class TransferDto {
  @ApiProperty({ 
    description: 'The unique ID of the recipient member',
    example: '662a5b...' 
  })
  @IsString()
  toMemberId: string;

  @ApiProperty({ 
    description: 'Amount to transfer',
    example: 5000 
  })
  @IsNumber()
  amount: number;

  @ApiProperty({ 
    description: 'Transaction description',
    example: 'Dinner at CDS' 
  })
  @IsString()
  description: string;
}

@ApiTags('Finance')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('finance')
export class FinanceController {
  constructor(
    private readonly financeService: FinanceService,
    private readonly ledgerService: LedgerService,
  ) {}

  @Get('wallet')
  @ApiOperation({ summary: 'Get current member wallet' })
  @ApiResponse({ status: 200, description: 'Wallet retrieved', type: Wallet })
  async getWallet(@CurrentUser('id') memberId: string) {
    return this.financeService.getWallet(memberId);
  }

  @Post('transfer')
  @ApiOperation({ summary: 'P2P Transfer between members' })
  @ApiResponse({ status: 201, description: 'Transfer successful' })
  async transfer(@CurrentUser('id') fromMemberId: string, @Body() dto: TransferDto) {
    return this.ledgerService.executeTransfer(
      fromMemberId,
      dto.toMemberId,
      dto.amount,
      TransactionType.TRANSFER,
      dto.description
    );
  }

  @Post('savings')
  @ApiOperation({ summary: 'Move funds to savings' })
  async toSavings(@CurrentUser('id') id: string, @Body() dto: { amount: number; isGroup?: boolean }) {
    return this.financeService.moveFundsToSavings(id, dto.amount, dto.isGroup);
  }

  @Patch('lock')
  @ApiOperation({ summary: 'Lock/Unlock member wallet' })
  async toggleLock(@CurrentUser('id') id: string, @Body() dto: { isLocked: boolean }) {
    return this.financeService.toggleWalletLock(id, dto.isLocked);
  }

  @Post('loan/request')
  @ApiOperation({ summary: 'Request Allawee Advance loan' })
  @ApiResponse({ status: 201, description: 'Loan approved and disbursed', type: Loan })
  async requestLoan(@CurrentUser('id') memberId: string, @Body() requestLoanDto: RequestLoanDto) {
    return this.financeService.requestLoan(memberId, requestLoanDto.amount, requestLoanDto.purpose);
  }

  @Get('loans')
  @ApiOperation({ summary: 'Get member loans' })
  @ApiResponse({ status: 200, description: 'Loans retrieved', type: [Loan] })
  async getLoans(@CurrentUser('id') memberId: string) {
    return this.financeService.getLoans(memberId);
  }

  @Get('ledger')
  @ApiOperation({ summary: 'Get audit ledger for member' })
  @ApiResponse({ status: 200, description: 'Ledger retrieved', type: [LedgerEntry] })
  async getLedger(@CurrentUser('id') memberId: string) {
    return this.ledgerService.getLedger(memberId);
  }
}
