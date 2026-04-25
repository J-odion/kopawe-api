import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IdentityService } from './identity.service';
import { VerifyMemberDto } from './dto/verify-member.dto';
import { Member } from './schemas/member.schema';

@ApiTags('Identity')
@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('verify')
  @ApiOperation({ summary: 'Verify NYSC member identity' })
  @ApiResponse({ status: 201, description: 'Member verified successfully', type: Member })
  async verify(@Body() verifyMemberDto: VerifyMemberDto) {
    return this.identityService.verifyMember(verifyMemberDto);
  }

  @Get('profile/:id')
  @ApiOperation({ summary: 'Get member profile' })
  @ApiResponse({ status: 200, description: 'Profile found', type: Member })
  async getProfile(@Param('id') id: string) {
    return this.identityService.getProfile(id);
  }

  @Get('id-card/:id')
  @ApiOperation({ summary: 'Generate Digital Corps ID with QR code' })
  @ApiResponse({ status: 200, description: 'Digital ID generated' })
  async getDigitalID(@Param('id') id: string) {
    return this.identityService.generateDigitalID(id);
  }
}
