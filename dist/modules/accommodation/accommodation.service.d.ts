import { Model } from 'mongoose';
import { Accommodation } from './schemas/accommodation.schema';
export declare class AccommodationService {
    private accommodationModel;
    constructor(accommodationModel: Model<Accommodation>);
    createListing(ownerId: string, data: any): Promise<Accommodation>;
    findAll(query: any): Promise<Accommodation[]>;
    findRoommates(location: string): Promise<Accommodation[]>;
}
