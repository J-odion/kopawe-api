import { Model } from 'mongoose';
import { Accommodation } from './schemas/accommodation.schema';
export declare class AccommodationService {
    private accommodationModel;
    constructor(accommodationModel: Model<Accommodation>);
    createListing(ownerId: string, data: any): Promise<Accommodation>;
    findAll(query: any): Promise<{
        data: Accommodation[];
        meta: any;
    }>;
    findByMember(memberId: string): Promise<Accommodation[]>;
    findRoommates(location: string): Promise<Accommodation[]>;
}
