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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const identity_service_1 = require("../identity/identity.service");
let AuthService = class AuthService {
    identityService;
    jwtService;
    constructor(identityService, jwtService) {
        this.identityService = identityService;
        this.jwtService = jwtService;
    }
    async login(callUpNumber) {
        try {
            const profile = await this.identityService.getProfileByCallUpNumber(callUpNumber);
            if (!profile) {
                throw new common_1.UnauthorizedException('Invalid Call-up Number');
            }
            const payload = { sub: profile._id, callUpNumber: profile.callUpNumber, isAdmin: profile.isAdmin };
            return {
                accessToken: this.jwtService.sign(payload),
                user: profile,
            };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async register(data) {
        const member = await this.identityService.verifyMember(data);
        const payload = { sub: member._id, callUpNumber: member.callUpNumber, isAdmin: member.isAdmin };
        return {
            accessToken: this.jwtService.sign(payload),
            user: member,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map