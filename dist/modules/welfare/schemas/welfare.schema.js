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
exports.WelfareRequestSchema = exports.WelfareRequest = exports.WelfareFundSchema = exports.WelfareFund = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let WelfareFund = class WelfareFund extends mongoose_2.Document {
    totalPool;
    totalDisbursed;
    currency;
};
exports.WelfareFund = WelfareFund;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], WelfareFund.prototype, "totalPool", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], WelfareFund.prototype, "totalDisbursed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 'NGN' }),
    __metadata("design:type", String)
], WelfareFund.prototype, "currency", void 0);
exports.WelfareFund = WelfareFund = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WelfareFund);
exports.WelfareFundSchema = mongoose_1.SchemaFactory.createForClass(WelfareFund);
let WelfareRequest = class WelfareRequest extends mongoose_2.Document {
    memberId;
    amount;
    reason;
    status;
    adminNote;
};
exports.WelfareRequest = WelfareRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], WelfareRequest.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WelfareRequest.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WelfareRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' }),
    __metadata("design:type", String)
], WelfareRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WelfareRequest.prototype, "adminNote", void 0);
exports.WelfareRequest = WelfareRequest = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WelfareRequest);
exports.WelfareRequestSchema = mongoose_1.SchemaFactory.createForClass(WelfareRequest);
//# sourceMappingURL=welfare.schema.js.map