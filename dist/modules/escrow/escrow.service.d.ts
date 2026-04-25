import { Model } from 'mongoose';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
import { FinanceService } from '../finance/finance.service';
export declare class EscrowService {
    private escrowModel;
    private financeService;
    constructor(escrowModel: Model<EscrowTransaction>, financeService: FinanceService);
    createEscrow(buyerId: string, sellerId: string, productId: string, amount: number): Promise<EscrowTransaction>;
    releaseFunds(escrowId: string): Promise<EscrowTransaction>;
}
