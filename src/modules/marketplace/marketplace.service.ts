import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product } from './schemas/marketplace.schema';

@Injectable()
export class MarketplaceService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async createListing(sellerId: string, data: any): Promise<Product> {
    const product = new this.productModel({
      ...data,
      sellerId: new Types.ObjectId(sellerId),
    });
    return product.save();
  }

  async findAll(query: any): Promise<Product[]> {
    const { search, category, minPrice, maxPrice, ...rest } = query;
    const filter: any = { status: 'AVAILABLE', ...rest };

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    return this.productModel.find(filter).exec();
  }

  async findByMember(memberId: string): Promise<Product[]> {
    return this.productModel.find({ sellerId: new Types.ObjectId(memberId) }).exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async updateLogistics(id: string, data: any): Promise<Product> {
    const product = await this.findOne(id);
    product.logistics = { ...product.logistics, ...data };
    return product.save();
  }
}
