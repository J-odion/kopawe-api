import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { WelfareFund, WelfareRequest } from './schemas/welfare.schema';

@Injectable()
export class WelfareService {
  constructor(
    @InjectModel(WelfareFund.name) private fundModel: Model<WelfareFund>,
    @InjectModel(WelfareRequest.name) private requestModel: Model<WelfareRequest>,
  ) {}

  async contributeToFund(amount: number): Promise<void> {
    const share = amount * 0.01; // 1% contribution
    await this.fundModel.updateOne(
      {}, 
      { $inc: { totalPool: share } }, 
      { upsert: true }
    );
  }

  async createRequest(memberId: string, amount: number, reason: string): Promise<WelfareRequest> {
    const request = new this.requestModel({
      memberId: new Types.ObjectId(memberId),
      amount,
      reason,
      status: 'PENDING',
    });
    return request.save();
  }

  async getFundStatus(): Promise<WelfareFund> {
    const fund = await this.fundModel.findOne().exec();
    return fund || ({ totalPool: 0, totalDisbursed: 0, currency: 'NGN' } as any);
  }
}
