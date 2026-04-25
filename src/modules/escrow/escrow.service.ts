import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
import { FinanceService } from '../finance/finance.service';

@Injectable()
export class EscrowService {
  constructor(
    @InjectModel(EscrowTransaction.name) private escrowModel: Model<EscrowTransaction>,
    private financeService: FinanceService,
  ) {}

  async createEscrow(buyerId: string, sellerId: string, productId: string, amount: number): Promise<EscrowTransaction> {
    const buyerWallet = await this.financeService.getWallet(buyerId);
    
    if (buyerWallet.balance < amount) {
      throw new BadRequestException('Insufficient wallet balance');
    }

    // Deduct from buyer
    // Note: In a real app, this should be an atomic transaction
    const escrow = new this.escrowModel({
      buyerId: new Types.ObjectId(buyerId),
      sellerId: new Types.ObjectId(sellerId),
      productId: new Types.ObjectId(productId),
      amount,
      status: 'HELD',
    });

    await escrow.save();
    return escrow;
  }

  async releaseFunds(escrowId: string): Promise<EscrowTransaction> {
    const escrow = await this.escrowModel.findById(escrowId);
    if (!escrow) throw new NotFoundException('Escrow not found');
    if (escrow.status !== 'HELD') throw new BadRequestException('Funds already processed');

    escrow.status = 'RELEASED';
    await escrow.save();

    // Credit seller (logic would be here in a real app)
    
    return escrow;
  }
}
