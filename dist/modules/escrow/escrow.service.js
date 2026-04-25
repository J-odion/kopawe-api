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
exports.EscrowService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const marketplace_schema_1 = require("../marketplace/schemas/marketplace.schema");
const finance_service_1 = require("../finance/finance.service");
let EscrowService = class EscrowService {
    escrowModel;
    financeService;
    constructor(escrowModel, financeService) {
        this.escrowModel = escrowModel;
        this.financeService = financeService;
    }
    async createEscrow(buyerId, sellerId, productId, amount) {
        const buyerWallet = await this.financeService.getWallet(buyerId);
        if (buyerWallet.balance < amount) {
            throw new common_1.BadRequestException('Insufficient wallet balance');
        }
        const escrow = new this.escrowModel({
            buyerId: new mongoose_2.Types.ObjectId(buyerId),
            sellerId: new mongoose_2.Types.ObjectId(sellerId),
            productId: new mongoose_2.Types.ObjectId(productId),
            amount,
            status: 'HELD',
        });
        await escrow.save();
        return escrow;
    }
    async releaseFunds(escrowId) {
        const escrow = await this.escrowModel.findById(escrowId);
        if (!escrow)
            throw new common_1.NotFoundException('Escrow not found');
        if (escrow.status !== 'HELD')
            throw new common_1.BadRequestException('Funds already processed');
        escrow.status = 'RELEASED';
        await escrow.save();
        return escrow;
    }
};
exports.EscrowService = EscrowService;
exports.EscrowService = EscrowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(marketplace_schema_1.EscrowTransaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        finance_service_1.FinanceService])
], EscrowService);
//# sourceMappingURL=escrow.service.js.map