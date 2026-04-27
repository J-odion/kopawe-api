import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as QRCode from 'qrcode';
import { Member } from './schemas/member.schema';
import { VerifyMemberDto } from './dto/verify-member.dto';

@Injectable()
export class IdentityService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async verifyMember(verifyMemberDto: VerifyMemberDto): Promise<Member> {
    // Mock NYSC API Verification
    const { callUpNumber, stateCode } = verifyMemberDto;
    
    let member = await this.memberModel.findOne({ callUpNumber }).exec();
    
    if (!member) {
      // Simulate creating a new verified member from NYSC data
      member = new this.memberModel({
        callUpNumber,
        stateCode,
        fullName: 'John Doe',
        state: 'Lagos',
        lga: 'Ikeja',
        cdsGroup: 'ICT',
        isVerified: true,
        creditScore: 500, // Initial score
      });
      await member.save();
    }

    return member;
  }

  async generateDigitalID(memberId: string): Promise<{ idCard: any; qrCode: string }> {
    const member = await this.getProfile(memberId);
    
    // Generate QR Code containing verification URL/Data
    const qrData = JSON.stringify({
      id: member._id,
      name: member.fullName,
      status: member.isVerified ? 'VERIFIED' : 'PENDING',
      stateCode: member.stateCode,
    });
    
    const qrCode = await QRCode.toDataURL(qrData);
    
    return {
      idCard: {
        fullName: member.fullName,
        stateCode: member.stateCode,
        callUpNumber: member.callUpNumber,
        state: member.state,
        lga: member.lga,
        cdsGroup: member.cdsGroup,
        verified: member.isVerified,
      },
      qrCode,
    };
  }

  async getProfile(id: string): Promise<Member> {
    const member = await this.memberModel.findById(id).exec();
    if (!member) throw new NotFoundException('Member not found');
    return member;
  }

  async getProfileByCallUpNumber(callUpNumber: string): Promise<Member | null> {
    return this.memberModel.findOne({ callUpNumber }).exec();
  }

  async checkFraud(memberId: string): Promise<{ isSuspicious: boolean; reason?: string }> {
    const member = await this.getProfile(memberId);
    // Basic logic: if credit score is unusually high for a new member
    if (member.creditScore > 800 && !member.isVerified) {
      return { isSuspicious: true, reason: 'High credit score for unverified member' };
    }
    return { isSuspicious: false };
  }
}
