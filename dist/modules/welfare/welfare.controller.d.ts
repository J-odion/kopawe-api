import { WelfareService } from './welfare.service';
import { WelfareFund, WelfareRequest } from './schemas/welfare.schema';
declare class CreateWelfareRequestDto {
    amount: number;
    reason: string;
}
export declare class WelfareController {
    private readonly welfareService;
    constructor(welfareService: WelfareService);
    getStatus(): Promise<WelfareFund>;
    createRequest(memberId: string, dto: CreateWelfareRequestDto): Promise<WelfareRequest>;
}
export {};
