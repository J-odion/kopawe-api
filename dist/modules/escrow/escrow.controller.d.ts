import { EscrowService } from './escrow.service';
import { EscrowTransaction } from '../marketplace/schemas/marketplace.schema';
declare class CreateEscrowDto {
    productId: string;
    sellerId: string;
    amount: number;
}
export declare class EscrowController {
    private readonly escrowService;
    constructor(escrowService: EscrowService);
    initiate(buyerId: string, dto: CreateEscrowDto): Promise<EscrowTransaction>;
    release(escrowId: string): Promise<EscrowTransaction>;
}
export {};
