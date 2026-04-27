import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(callUpNumber: string): Promise<{
        accessToken: string;
        user: import("../identity/schemas/member.schema").Member;
    }>;
    register(data: any): Promise<{
        accessToken: string;
        user: import("../identity/schemas/member.schema").Member;
    }>;
}
