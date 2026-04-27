import { JwtService } from '@nestjs/jwt';
import { IdentityService } from '../identity/identity.service';
export declare class AuthService {
    private identityService;
    private jwtService;
    constructor(identityService: IdentityService, jwtService: JwtService);
    login(callUpNumber: string): Promise<{
        accessToken: string;
        user: import("../identity/schemas/member.schema").Member;
    }>;
    register(data: any): Promise<{
        accessToken: string;
        user: import("../identity/schemas/member.schema").Member;
    }>;
}
