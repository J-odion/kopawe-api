import { IdentityService } from './identity.service';
import { VerifyMemberDto } from './dto/verify-member.dto';
import { Member } from './schemas/member.schema';
export declare class IdentityController {
    private readonly identityService;
    constructor(identityService: IdentityService);
    verify(verifyMemberDto: VerifyMemberDto): Promise<Member>;
    getProfile(id: string): Promise<Member>;
    getDigitalID(id: string): Promise<{
        idCard: any;
        qrCode: string;
    }>;
}
