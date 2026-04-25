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
exports.InsuranceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const insurance_service_1 = require("./insurance.service");
let InsuranceController = class InsuranceController {
    insuranceService;
    constructor(insuranceService) {
        this.insuranceService = insuranceService;
    }
    async getPlans() {
        return [
            { id: 'health-basic', name: 'Health Micro-insurance', price: 2000 },
            { id: 'device-plus', name: 'Device Insurance', price: 1500 },
        ];
    }
    async subscribe() {
        return { status: 'Subscribed' };
    }
};
exports.InsuranceController = InsuranceController;
__decorate([
    (0, common_1.Get)('plans'),
    (0, swagger_1.ApiOperation)({ summary: 'Get micro-insurance plans' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InsuranceController.prototype, "getPlans", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    (0, swagger_1.ApiOperation)({ summary: 'Subscribe to an insurance plan' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InsuranceController.prototype, "subscribe", null);
exports.InsuranceController = InsuranceController = __decorate([
    (0, swagger_1.ApiTags)('Insurance'),
    (0, common_1.Controller)('insurance'),
    __metadata("design:paramtypes", [insurance_service_1.InsuranceService])
], InsuranceController);
//# sourceMappingURL=insurance.controller.js.map