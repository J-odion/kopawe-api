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
exports.LedgerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ledger_schema_1 = require("./schemas/ledger.schema");
const finance_schema_1 = require("./schemas/finance.schema");
const welfare_service_1 = require("../welfare/welfare.service");
let LedgerService = class LedgerService {
    ledgerModel;
    transactionModel;
    walletModel;
    welfareService;
    constructor(ledgerModel, transactionModel, walletModel, welfareService) {
        this.ledgerModel = ledgerModel;
        this.transactionModel = transactionModel;
        this.walletModel = walletModel;
        this.welfareService = welfareService;
    }
    async executeTransfer(fromMemberId, toMemberId, amount, type, description, metadata = {}) {
        const transaction = new this.transactionModel({
            type,
            amount,
            fromMemberId: fromMemberId ? new mongoose_2.Types.ObjectId(fromMemberId) : null,
            toMemberId: toMemberId ? new mongoose_2.Types.ObjectId(toMemberId) : null,
            status: 'PENDING',
            metadata,
        });
        const savedTransaction = await transaction.save();
        try {
            if (fromMemberId) {
                await this.postEntry(savedTransaction._id, fromMemberId, -amount, ledger_schema_1.AccountType.MAIN, `Debit: ${description}`);
            }
            if (toMemberId) {
                await this.postEntry(savedTransaction._id, toMemberId, amount, ledger_schema_1.AccountType.MAIN, `Credit: ${description}`);
            }
            savedTransaction.status = 'SUCCESS';
            await savedTransaction.save();
            await this.welfareService.contributeToFund(amount);
            return savedTransaction;
        }
        catch (error) {
            savedTransaction.status = 'FAILED';
            savedTransaction.metadata = { ...savedTransaction.metadata, error: error.message };
            await savedTransaction.save();
            throw error;
        }
    }
    async postEntry(transactionId, memberId, amount, accountType, description) {
        let wallet = await this.walletModel.findOne({ memberId: new mongoose_2.Types.ObjectId(memberId) });
        if (!wallet) {
            wallet = new this.walletModel({ memberId: new mongoose_2.Types.ObjectId(memberId), balance: 0 });
        }
        if (amount < 0 && wallet.balance + amount < 0) {
            throw new common_1.BadRequestException(`Insufficient funds in ${accountType} account`);
        }
        wallet.balance += amount;
        await wallet.save();
        const entry = new this.ledgerModel({
            transactionId,
            memberId: new mongoose_2.Types.ObjectId(memberId),
            accountType,
            amount,
            balanceAfter: wallet.balance,
            description,
        });
        await entry.save();
    }
    async getLedger(memberId) {
        return this.ledgerModel.find({ memberId: new mongoose_2.Types.ObjectId(memberId) }).sort({ createdAt: -1 }).exec();
    }
};
exports.LedgerService = LedgerService;
exports.LedgerService = LedgerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ledger_schema_1.LedgerEntry.name)),
    __param(1, (0, mongoose_1.InjectModel)(ledger_schema_1.TransactionRecord.name)),
    __param(2, (0, mongoose_1.InjectModel)(finance_schema_1.Wallet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        welfare_service_1.WelfareService])
], LedgerService);
//# sourceMappingURL=ledger.service.js.map