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
exports.WelfareController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const welfare_service_1 = require("./welfare.service");
const welfare_schema_1 = require("./schemas/welfare.schema");
const class_validator_1 = require("class-validator");
class CreateWelfareRequestDto {
    amount;
    reason;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateWelfareRequestDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Medical emergency at PPA' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWelfareRequestDto.prototype, "reason", void 0);
let WelfareController = class WelfareController {
    welfareService;
    constructor(welfareService) {
        this.welfareService = welfareService;
    }
    async getStatus() {
        return this.welfareService.getFundStatus();
    }
    async createRequest(memberId, dto) {
        return this.welfareService.createRequest(memberId, dto.amount, dto.reason);
    }
};
exports.WelfareController = WelfareController;
__decorate([
    (0, common_1.Get)('status'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current Welfare Fund pool status' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: welfare_schema_1.WelfareFund }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WelfareController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Post)('request/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Request financial support from the Welfare Fund' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: welfare_schema_1.WelfareRequest }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateWelfareRequestDto]),
    __metadata("design:returntype", Promise)
], WelfareController.prototype, "createRequest", null);
exports.WelfareController = WelfareController = __decorate([
    (0, swagger_1.ApiTags)('Welfare Fund'),
    (0, common_1.Controller)('welfare'),
    __metadata("design:paramtypes", [welfare_service_1.WelfareService])
], WelfareController);
//# sourceMappingURL=welfare.controller.js.map