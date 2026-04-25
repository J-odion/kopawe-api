import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Accommodation } from './schemas/accommodation.schema';

@Injectable()
export class AccommodationService {
  constructor(@InjectModel(Accommodation.name) private accommodationModel: Model<Accommodation>) {}

  async createListing(ownerId: string, data: any): Promise<Accommodation> {
    const accommodation = new this.accommodationModel({
      ...data,
      ownerId: new Types.ObjectId(ownerId),
    });
    return accommodation.save();
  }

  async findAll(query: any): Promise<Accommodation[]> {
    return this.accommodationModel.find({ status: 'AVAILABLE', ...query }).exec();
  }

  async findRoommates(location: string): Promise<Accommodation[]> {
    return this.accommodationModel.find({ 
      location, 
      roommateWanted: true, 
      status: 'AVAILABLE' 
    }).exec();
  }
}
