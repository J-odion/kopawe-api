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

  async findAll(query: any): Promise<{ data: Accommodation[]; meta: any }> {
    const { search, minPrice, maxPrice, roommateWanted, page = 1, limit = 20, ...rest } = query;
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

    const skip = (Number(page) - 1) * Number(limit);
    const [data, total] = await Promise.all([
      this.accommodationModel.find(filter).skip(skip).limit(Number(limit)).exec(),
      this.accommodationModel.countDocuments(filter),
    ]);

    return {
      data,
      meta: {
        total,
        page: Number(page),
        lastPage: Math.ceil(total / Number(limit)),
        limit: Number(limit),
      },
    };
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
