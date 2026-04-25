import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { FinanceService } from './finance.service';
import { LedgerService } from './ledger.service';
import { Wallet, Loan } from './schemas/finance.schema';
import { LedgerEntry, TransactionType } from './schemas/ledger.schema';
import { IsNumber, IsString } from 'class-validator';

class RequestLoanDto {
  @ApiProperty({ example: 50000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'Transport to PPA' })
  @IsString()
  purpose: string;
}

class TransferDto {
  @ApiProperty({ example: 'recipient-member-id' })
  @IsString()
  toMemberId: string;

  @ApiProperty({ example: 5000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'Dinner at CDS' })
  @IsString()
  description: string;
}

@ApiTags('Finance')
@Controller('finance')
export class FinanceController {
  constructor(
    private readonly financeService: FinanceService,
    private readonly ledgerService: LedgerService,
  ) {}

  @Get('wallet/:memberId')
  @ApiOperation({ summary: 'Get member wallet' })
  @ApiResponse({ status: 200, description: 'Wallet retrieved', type: Wallet })
  async getWallet(@Param('memberId') memberId: string) {
    return this.financeService.getWallet(memberId);
  }

  @Post('transfer/:memberId')
  @ApiOperation({ summary: 'P2P Transfer between members' })
  @ApiResponse({ status: 201, description: 'Transfer successful' })
  async transfer(@Param('memberId') fromMemberId: string, @Body() dto: TransferDto) {
    return this.ledgerService.executeTransfer(
      fromMemberId,
      dto.toMemberId,
      dto.amount,
      TransactionType.TRANSFER,
      dto.description
    );
  }

  @Post('savings/:memberId')
  @ApiOperation({ summary: 'Move funds to savings' })
  async toSavings(@Param('memberId') id: string, @Body() dto: { amount: number; isGroup?: boolean }) {
    return this.financeService.moveFundsToSavings(id, dto.amount, dto.isGroup);
  }

  @Patch('lock/:memberId')
  @ApiOperation({ summary: 'Lock/Unlock member wallet' })
  async toggleLock(@Param('memberId') id: string, @Body() dto: { isLocked: boolean }) {
    return this.financeService.toggleWalletLock(id, dto.isLocked);
  }

  @Post('loan/request/:memberId')
  @ApiOperation({ summary: 'Request Allawee Advance loan' })
  @ApiResponse({ status: 201, description: 'Loan approved and disbursed', type: Loan })
  async requestLoan(@Param('memberId') memberId: string, @Body() requestLoanDto: RequestLoanDto) {
    return this.financeService.requestLoan(memberId, requestLoanDto.amount, requestLoanDto.purpose);
  }

  @Get('loans/:memberId')
  @ApiOperation({ summary: 'Get member loans' })
  @ApiResponse({ status: 200, description: 'Loans retrieved', type: [Loan] })
  async getLoans(@Param('memberId') memberId: string) {
    return this.financeService.getLoans(memberId);
  }

  @Get('ledger/:memberId')
  @ApiOperation({ summary: 'Get audit ledger for member' })
  @ApiResponse({ status: 200, description: 'Ledger retrieved', type: [LedgerEntry] })
  async getLedger(@Param('memberId') memberId: string) {
    return this.ledgerService.getLedger(memberId);
  }
}
