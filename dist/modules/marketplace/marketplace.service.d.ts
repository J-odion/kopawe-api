import { Model } from 'mongoose';
import { Product } from './schemas/marketplace.schema';
export declare class MarketplaceService {
    private productModel;
    constructor(productModel: Model<Product>);
    createListing(sellerId: string, data: any): Promise<Product>;
    findAll(query: any): Promise<{
        data: Product[];
        meta: any;
    }>;
    findByMember(memberId: string): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    updateLogistics(id: string, data: any): Promise<Product>;
}
