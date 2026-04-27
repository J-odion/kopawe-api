"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const QRCode = __importStar(require("qrcode"));
const member_schema_1 = require("./schemas/member.schema");
let IdentityService = class IdentityService {
    memberModel;
    constructor(memberModel) {
        this.memberModel = memberModel;
    }
    async verifyMember(verifyMemberDto) {
        const { callUpNumber, stateCode } = verifyMemberDto;
        let member = await this.memberModel.findOne({ callUpNumber }).exec();
        if (!member) {
            member = new this.memberModel({
                callUpNumber,
                stateCode,
                fullName: 'John Doe',
                state: 'Lagos',
                lga: 'Ikeja',
                cdsGroup: 'ICT',
                isVerified: true,
                creditScore: 500,
            });
            await member.save();
        }
        return member;
    }
    async generateDigitalID(memberId) {
        const member = await this.getProfile(memberId);
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
    async getProfile(id) {
        const member = await this.memberModel.findById(id).exec();
        if (!member)
            throw new common_1.NotFoundException('Member not found');
        return member;
    }
    async getProfileByCallUpNumber(callUpNumber) {
        return this.memberModel.findOne({ callUpNumber }).exec();
    }
    async checkFraud(memberId) {
        const member = await this.getProfile(memberId);
        if (member.creditScore > 800 && !member.isVerified) {
            return { isSuspicious: true, reason: 'High credit score for unverified member' };
        }
        return { isSuspicious: false };
    }
};
exports.IdentityService = IdentityService;
exports.IdentityService = IdentityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], IdentityService);
//# sourceMappingURL=identity.service.js.map