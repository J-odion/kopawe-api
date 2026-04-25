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
exports.LoanSchema = exports.Loan = exports.WalletSchema = exports.Wallet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let Wallet = class Wallet extends mongoose_2.Document {
    memberId;
    balance;
    savingsBalance;
    groupSavingsBalance;
    isLocked;
    currency;
};
exports.Wallet = Wallet;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true, unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Wallet.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "savingsBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "groupSavingsBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Wallet.prototype, "isLocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: 'NGN' }),
    __metadata("design:type", String)
], Wallet.prototype, "currency", void 0);
exports.Wallet = Wallet = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Wallet);
exports.WalletSchema = mongoose_1.SchemaFactory.createForClass(Wallet);
let Loan = class Loan extends mongoose_2.Document {
    memberId;
    amount;
    interest;
    repaymentDate;
    status;
    repaymentSchedule;
    purpose;
};
exports.Loan = Loan;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Loan.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Loan.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Loan.prototype, "interest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Loan.prototype, "repaymentDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['PENDING', 'APPROVED', 'DISBURSED', 'REPAID', 'DEFAULTED'], default: 'PENDING' }),
    __metadata("design:type", String)
], Loan.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([Object]),
    __metadata("design:type", Array)
], Loan.prototype, "repaymentSchedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Loan.prototype, "purpose", void 0);
exports.Loan = Loan = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Loan);
exports.LoanSchema = mongoose_1.SchemaFactory.createForClass(Loan);
//# sourceMappingURL=finance.schema.js.map