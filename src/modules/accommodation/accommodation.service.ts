import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Accommodation } from './schemas/accommodation.schema';

@Injectable()
export class AccommodationService {
  constructor(@InjectModel(Accommodation.name) private accommodationModel: Model<Accommodation>) {}

  async createListing(ownerId: string, data: any): Promise<Accommodation> {
    const listing = new this.accommodationModel({
      ...data,
      ownerId: new Types.ObjectId(ownerId),
    });
    return listing.save();
  }

  async findAll(query: any): Promise<Accommodation[]> {
    const { search, minPrice, maxPrice, roommateWanted, ...rest } = query;
    const filter: any = { ...rest };

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ];
    }

    if (roommateWanted !== undefined) {
      filter.roommateWanted = roommateWanted === 'true';
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    return this.accommodationModel.find(filter).exec();
  }

  async findByMember(memberId: string): Promise<Accommodation[]> {
    return this.accommodationModel.find({ ownerId: new Types.ObjectId(memberId) }).exec();
  }

  async findRoommates(location: string): Promise<Accommodation[]> {
    return this.accommodationModel.find({ 
      location, 
      roommateWanted: true, 
      status: 'AVAILABLE' 
    }).exec();
  }
}
