import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IdentityService } from '../identity/identity.service';

@Injectable()
export class AuthService {
  constructor(
    private identityService: IdentityService,
    private jwtService: JwtService,
  ) {}

  async login(callUpNumber: string) {
    // In a real app, you would check passwords here. 
    // For this prototype, if the identity exists (or can be verified), we issue a token.
    try {
      const profile = await this.identityService.getProfileByCallUpNumber(callUpNumber);
      if (!profile) {
        throw new UnauthorizedException('Invalid Call-up Number');
      }

      const payload = { sub: profile._id, callUpNumber: profile.callUpNumber, isAdmin: profile.isAdmin };
      return {
        accessToken: this.jwtService.sign(payload),
        user: profile,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async register(data: any) {
    // We proxy registration to IdentityService's verify Member
    const member = await this.identityService.verifyMember(data);
    
    const payload = { sub: member._id, callUpNumber: member.callUpNumber, isAdmin: member.isAdmin };
    return {
      accessToken: this.jwtService.sign(payload),
      user: member,
    };
  }
}
