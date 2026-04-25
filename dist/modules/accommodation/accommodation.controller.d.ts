import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
declare class CreateAccommodationDto {
    title: string;
    location: string;
    price: number;
    roommateWanted: boolean;
}
export declare class AccommodationController {
    private readonly accommodationService;
    constructor(accommodationService: AccommodationService);
    create(ownerId: string, dto: CreateAccommodationDto): Promise<Accommodation>;
    findAll(query: any): Promise<Accommodation[]>;
    findByMember(memberId: string): Promise<Accommodation[]>;
    findRoommates(location: string): Promise<Accommodation[]>;
}
export {};
