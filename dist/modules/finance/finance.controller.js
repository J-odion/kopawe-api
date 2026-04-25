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
exports.FinanceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const finance_service_1 = require("./finance.service");
const ledger_service_1 = require("./ledger.service");
const finance_schema_1 = require("./schemas/finance.schema");
const ledger_schema_1 = require("./schemas/ledger.schema");
const class_validator_1 = require("class-validator");
class RequestLoanDto {
    amount;
    purpose;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Loan amount requested (₦1k - ₦100k)',
        example: 50000
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestLoanDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The reason for the loan request',
        example: 'Transport to PPA'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestLoanDto.prototype, "purpose", void 0);
class TransferDto {
    toMemberId;
    amount;
    description;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique ID of the recipient member',
        example: '662a5b...'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransferDto.prototype, "toMemberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Amount to transfer',
        example: 5000
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransferDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transaction description',
        example: 'Dinner at CDS'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransferDto.prototype, "description", void 0);
let FinanceController = class FinanceController {
    financeService;
    ledgerService;
    constructor(financeService, ledgerService) {
        this.financeService = financeService;
        this.ledgerService = ledgerService;
    }
    async getWallet(memberId) {
        return this.financeService.getWallet(memberId);
    }
    async transfer(fromMemberId, dto) {
        return this.ledgerService.executeTransfer(fromMemberId, dto.toMemberId, dto.amount, ledger_schema_1.TransactionType.TRANSFER, dto.description);
    }
    async toSavings(id, dto) {
        return this.financeService.moveFundsToSavings(id, dto.amount, dto.isGroup);
    }
    async toggleLock(id, dto) {
        return this.financeService.toggleWalletLock(id, dto.isLocked);
    }
    async requestLoan(memberId, requestLoanDto) {
        return this.financeService.requestLoan(memberId, requestLoanDto.amount, requestLoanDto.purpose);
    }
    async getLoans(memberId) {
        return this.financeService.getLoans(memberId);
    }
    async getLedger(memberId) {
        return this.ledgerService.getLedger(memberId);
    }
};
exports.FinanceController = FinanceController;
__decorate([
    (0, common_1.Get)('wallet/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get member wallet' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Wallet retrieved', type: finance_schema_1.Wallet }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getWallet", null);
__decorate([
    (0, common_1.Post)('transfer/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'P2P Transfer between members' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Transfer successful' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, TransferDto]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "transfer", null);
__decorate([
    (0, common_1.Post)('savings/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Move funds to savings' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "toSavings", null);
__decorate([
    (0, common_1.Patch)('lock/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Lock/Unlock member wallet' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "toggleLock", null);
__decorate([
    (0, common_1.Post)('loan/request/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Request Allawee Advance loan' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loan approved and disbursed', type: finance_schema_1.Loan }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, RequestLoanDto]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "requestLoan", null);
__decorate([
    (0, common_1.Get)('loans/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get member loans' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loans retrieved', type: [finance_schema_1.Loan] }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getLoans", null);
__decorate([
    (0, common_1.Get)('ledger/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get audit ledger for member' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ledger retrieved', type: [ledger_schema_1.LedgerEntry] }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getLedger", null);
exports.FinanceController = FinanceController = __decorate([
    (0, swagger_1.ApiTags)('Finance'),
    (0, common_1.Controller)('finance'),
    __metadata("design:paramtypes", [finance_service_1.FinanceService,
        ledger_service_1.LedgerService])
], FinanceController);
//# sourceMappingURL=finance.controller.js.map