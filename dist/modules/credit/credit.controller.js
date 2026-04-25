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
exports.CreditController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const credit_service_1 = require("./credit.service");
let CreditController = class CreditController {
    creditService;
    constructor(creditService) {
        this.creditService = creditService;
    }
    async getScore(memberId) {
        return this.creditService.calculateScore(memberId);
    }
};
exports.CreditController = CreditController;
__decorate([
    (0, common_1.Get)('score/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get proprietary credit score for a member' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Credit score calculated' }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "getScore", null);
exports.CreditController = CreditController = __decorate([
    (0, swagger_1.ApiTags)('Credit System'),
    (0, common_1.Controller)('credit'),
    __metadata("design:paramtypes", [credit_service_1.CreditService])
], CreditController);
//# sourceMappingURL=credit.controller.js.map