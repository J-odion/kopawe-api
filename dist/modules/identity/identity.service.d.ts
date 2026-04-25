import { Model } from 'mongoose';
import { Member } from './schemas/member.schema';
import { VerifyMemberDto } from './dto/verify-member.dto';
export declare class IdentityService {
    private memberModel;
    constructor(memberModel: Model<Member>);
    verifyMember(verifyMemberDto: VerifyMemberDto): Promise<Member>;
    generateDigitalID(memberId: string): Promise<{
        idCard: any;
        qrCode: string;
    }>;
    getProfile(id: string): Promise<Member>;
    checkFraud(memberId: string): Promise<{
        isSuspicious: boolean;
        reason?: string;
    }>;
}
