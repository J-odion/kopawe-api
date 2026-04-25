"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const finance_controller_1 = require("./finance.controller");
const finance_service_1 = require("./finance.service");
const ledger_service_1 = require("./ledger.service");
const finance_schema_1 = require("./schemas/finance.schema");
const ledger_schema_1 = require("./schemas/ledger.schema");
const welfare_module_1 = require("../welfare/welfare.module");
let FinanceModule = class FinanceModule {
};
exports.FinanceModule = FinanceModule;
exports.FinanceModule = FinanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: finance_schema_1.Wallet.name, schema: finance_schema_1.WalletSchema },
                { name: finance_schema_1.Loan.name, schema: finance_schema_1.LoanSchema },
                { name: ledger_schema_1.LedgerEntry.name, schema: ledger_schema_1.LedgerEntrySchema },
                { name: ledger_schema_1.TransactionRecord.name, schema: ledger_schema_1.TransactionRecordSchema },
            ]),
            welfare_module_1.WelfareModule,
        ],
        controllers: [finance_controller_1.FinanceController],
        providers: [finance_service_1.FinanceService, ledger_service_1.LedgerService],
        exports: [finance_service_1.FinanceService, ledger_service_1.LedgerService],
    })
], FinanceModule);
//# sourceMappingURL=finance.module.js.map