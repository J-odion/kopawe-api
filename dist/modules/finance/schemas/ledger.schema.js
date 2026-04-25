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
exports.TransactionRecordSchema = exports.TransactionRecord = exports.LedgerEntrySchema = exports.LedgerEntry = exports.TransactionType = exports.AccountType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
var AccountType;
(function (AccountType) {
    AccountType["MAIN"] = "MAIN";
    AccountType["SAVINGS"] = "SAVINGS";
    AccountType["ESCROW"] = "ESCROW";
    AccountType["SYSTEM"] = "SYSTEM";
})(AccountType || (exports.AccountType = AccountType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["TRANSFER"] = "TRANSFER";
    TransactionType["LOAN_DISBURSEMENT"] = "LOAN_DISBURSEMENT";
    TransactionType["LOAN_REPAYMENT"] = "LOAN_REPAYMENT";
    TransactionType["MARKETPLACE_PAYMENT"] = "MARKETPLACE_PAYMENT";
    TransactionType["ESCROW_RELEASE"] = "ESCROW_RELEASE";
    TransactionType["BILL_PAYMENT"] = "BILL_PAYMENT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
let LedgerEntry = class LedgerEntry extends mongoose_2.Document {
    transactionId;
    memberId;
    accountType;
    amount;
    balanceAfter;
    description;
};
exports.LedgerEntry = LedgerEntry;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LedgerEntry.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LedgerEntry.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: AccountType, required: true }),
    __metadata("design:type", String)
], LedgerEntry.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], LedgerEntry.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], LedgerEntry.prototype, "balanceAfter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], LedgerEntry.prototype, "description", void 0);
exports.LedgerEntry = LedgerEntry = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], LedgerEntry);
exports.LedgerEntrySchema = mongoose_1.SchemaFactory.createForClass(LedgerEntry);
let TransactionRecord = class TransactionRecord extends mongoose_2.Document {
    type;
    amount;
    fromMemberId;
    toMemberId;
    status;
    metadata;
};
exports.TransactionRecord = TransactionRecord;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: TransactionType, required: true }),
    __metadata("design:type", String)
], TransactionRecord.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], TransactionRecord.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], TransactionRecord.prototype, "fromMemberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], TransactionRecord.prototype, "toMemberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['PENDING', 'SUCCESS', 'FAILED'], default: 'PENDING' }),
    __metadata("design:type", String)
], TransactionRecord.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], TransactionRecord.prototype, "metadata", void 0);
exports.TransactionRecord = TransactionRecord = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], TransactionRecord);
exports.TransactionRecordSchema = mongoose_1.SchemaFactory.createForClass(TransactionRecord);
//# sourceMappingURL=ledger.schema.js.map