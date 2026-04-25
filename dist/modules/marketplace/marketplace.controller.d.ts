import { MarketplaceService } from './marketplace.service';
import { Product } from './schemas/marketplace.schema';
declare class CreateProductDto {
    title: string;
    description: string;
    price: number;
    condition: string;
}
export declare class MarketplaceController {
    private readonly marketplaceService;
    constructor(marketplaceService: MarketplaceService);
    create(sellerId: string, dto: CreateProductDto): Promise<Product>;
    findAll(query: any): Promise<Product[]>;
    findByMember(memberId: string): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    updateLogistics(id: string, dto: {
        status: string;
        trackingNumber: string;
    }): Promise<Product>;
}
export {};
