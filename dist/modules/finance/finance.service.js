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
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const finance_schema_1 = require("./schemas/finance.schema");
const ledger_service_1 = require("./ledger.service");
const ledger_schema_1 = require("./schemas/ledger.schema");
let FinanceService = class FinanceService {
    walletModel;
    loanModel;
    ledgerService;
    constructor(walletModel, loanModel, ledgerService) {
        this.walletModel = walletModel;
        this.loanModel = loanModel;
        this.ledgerService = ledgerService;
    }
    async getWallet(memberId) {
        let wallet = await this.walletModel.findOne({ memberId: new mongoose_2.Types.ObjectId(memberId) }).exec();
        if (!wallet) {
            wallet = new this.walletModel({ memberId: new mongoose_2.Types.ObjectId(memberId), balance: 0 });
            await wallet.save();
        }
        return wallet;
    }
    async requestLoan(memberId, amount, purpose) {
        if (amount < 1000 || amount > 100000) {
            throw new common_1.BadRequestException('Loan amount must be between ₦1k and ₦100k');
        }
        const wallet = await this.getWallet(memberId);
        if (wallet.isLocked)
            throw new common_1.BadRequestException('Wallet is locked');
        const interest = amount * 0.1;
        const repaymentDate = new Date();
        repaymentDate.setMonth(repaymentDate.getMonth() + 1);
        const repaymentSchedule = [
            { date: repaymentDate, amount: amount + interest, status: 'PENDING' }
        ];
        const loan = new this.loanModel({
            memberId: new mongoose_2.Types.ObjectId(memberId),
            amount,
            interest,
            repaymentDate,
            repaymentSchedule,
            purpose,
            status: 'APPROVED',
        });
        await loan.save();
        await this.ledgerService.executeTransfer(null, memberId, amount, ledger_schema_1.TransactionType.LOAN_DISBURSEMENT, `Allawee Advance: ${purpose}`, { loanId: loan._id });
        return loan;
    }
    async toggleWalletLock(memberId, isLocked) {
        const wallet = await this.getWallet(memberId);
        wallet.isLocked = isLocked;
        return wallet.save();
    }
    async moveFundsToSavings(memberId, amount, isGroup = false) {
        const wallet = await this.getWallet(memberId);
        if (wallet.balance < amount)
            throw new common_1.BadRequestException('Insufficient balance');
        wallet.balance -= amount;
        if (isGroup) {
            wallet.groupSavingsBalance += amount;
        }
        else {
            wallet.savingsBalance += amount;
        }
        return wallet.save();
    }
    async getLoans(memberId) {
        return this.loanModel.find({ memberId: new mongoose_2.Types.ObjectId(memberId) }).exec();
    }
};
exports.FinanceService = FinanceService;
exports.FinanceService = FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(finance_schema_1.Wallet.name)),
    __param(1, (0, mongoose_1.InjectModel)(finance_schema_1.Loan.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        ledger_service_1.LedgerService])
], FinanceService);
//# sourceMappingURL=finance.service.js.map