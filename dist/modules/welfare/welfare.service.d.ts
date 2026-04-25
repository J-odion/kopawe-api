import { Model } from 'mongoose';
import { WelfareFund, WelfareRequest } from './schemas/welfare.schema';
export declare class WelfareService {
    private fundModel;
    private requestModel;
    constructor(fundModel: Model<WelfareFund>, requestModel: Model<WelfareRequest>);
    contributeToFund(amount: number): Promise<void>;
    createRequest(memberId: string, amount: number, reason: string): Promise<WelfareRequest>;
    getFundStatus(): Promise<WelfareFund>;
}
