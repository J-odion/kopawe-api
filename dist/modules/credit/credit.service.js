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
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const identity_service_1 = require("../identity/identity.service");
const finance_service_1 = require("../finance/finance.service");
const ledger_service_1 = require("../finance/ledger.service");
let CreditService = class CreditService {
    identityService;
    financeService;
    ledgerService;
    constructor(identityService, financeService, ledgerService) {
        this.identityService = identityService;
        this.financeService = financeService;
        this.ledgerService = ledgerService;
    }
    async calculateScore(memberId) {
        const member = await this.identityService.getProfile(memberId);
        const wallet = await this.financeService.getWallet(memberId);
        const ledger = await this.ledgerService.getLedger(memberId);
        const loans = await this.financeService.getLoans(memberId);
        let score = 300;
        const reasons = [];
        if (member.isVerified) {
            score += 150;
            reasons.push('Verified NYSC Identity (+150)');
        }
        if (wallet.balance > 50000) {
            score += 100;
            reasons.push('Healthy wallet balance (+100)');
        }
        else if (wallet.balance > 10000) {
            score += 50;
            reasons.push('Consistent wallet balance (+50)');
        }
        if (ledger.length > 10) {
            score += 50;
            reasons.push('High transaction activity (+50)');
        }
        const defaulted = loans.some(l => l.status === 'DEFAULTED');
        if (defaulted) {
            score -= 200;
            reasons.push('Previous loan default (-200)');
        }
        else if (loans.length > 0) {
            const allRepaid = loans.every(l => l.status === 'REPAID' || l.status === 'DISBURSED');
            if (allRepaid) {
                score += 100;
                reasons.push('Perfect repayment history (+100)');
            }
        }
        score = Math.min(score, 850);
        score = Math.max(score, 300);
        let rating = 'Bronze';
        if (score >= 700)
            rating = 'Platinum';
        else if (score >= 600)
            rating = 'Gold';
        else if (score >= 450)
            rating = 'Silver';
        return { score, rating, reason: reasons };
    }
};
exports.CreditService = CreditService;
exports.CreditService = CreditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        finance_service_1.FinanceService,
        ledger_service_1.LedgerService])
], CreditService);
//# sourceMappingURL=credit.service.js.map