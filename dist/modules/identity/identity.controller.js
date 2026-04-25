"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const identity_service_1 = require("./identity.service");
const verify_member_dto_1 = require("./dto/verify-member.dto");
const member_schema_1 = require("./schemas/member.schema");
let IdentityController = class IdentityController {
    identityService;
    constructor(identityService) {
        this.identityService = identityService;
    }
    async verify(verifyMemberDto) {
        return this.identityService.verifyMember(verifyMemberDto);
    }
    async getProfile(id) {
        return this.identityService.getProfile(id);
    }
    async getDigitalID(id) {
        return this.identityService.generateDigitalID(id);
    }
};
exports.IdentityController = IdentityController;
__decorate([
    (0, common_1.Post)('verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify NYSC member identity' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Member verified successfully', type: member_schema_1.Member }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_member_dto_1.VerifyMemberDto]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "verify", null);
__decorate([
    (0, common_1.Get)('profile/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get member profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile found', type: member_schema_1.Member }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('id-card/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate Digital Corps ID with QR code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Digital ID generated' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdentityController.prototype, "getDigitalID", null);
exports.IdentityController = IdentityController = __decorate([
    (0, swagger_1.ApiTags)('Identity'),
    (0, common_1.Controller)('identity'),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], IdentityController);
//# sourceMappingURL=identity.controller.js.map