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

  async findAll(query: any): Promise<{ data: Product[]; meta: any }> {
    const { search, category, minPrice, maxPrice, page = 1, limit = 20, ...rest } = query;
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

    const skip = (Number(page) - 1) * Number(limit);
    const [data, total] = await Promise.all([
      this.productModel.find(filter).skip(skip).limit(Number(limit)).exec(),
      this.productModel.countDocuments(filter),
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
