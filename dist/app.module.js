"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const identity_module_1 = require("./modules/identity/identity.module");
const auth_module_1 = require("./modules/auth/auth.module");
const finance_module_1 = require("./modules/finance/finance.module");
const marketplace_module_1 = require("./modules/marketplace/marketplace.module");
const escrow_module_1 = require("./modules/escrow/escrow.module");
const accommodation_module_1 = require("./modules/accommodation/accommodation.module");
const admin_module_1 = require("./modules/admin/admin.module");
const career_module_1 = require("./modules/career/career.module");
const insurance_module_1 = require("./modules/insurance/insurance.module");
const credit_module_1 = require("./modules/credit/credit.module");
const chat_module_1 = require("./modules/chat/chat.module");
const welfare_module_1 = require("./modules/welfare/welfare.module");
const community_module_1 = require("./modules/community/community.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
            identity_module_1.IdentityModule,
            auth_module_1.AuthModule,
            finance_module_1.FinanceModule,
            marketplace_module_1.MarketplaceModule,
            escrow_module_1.EscrowModule,
            accommodation_module_1.AccommodationModule,
            admin_module_1.AdminModule,
            career_module_1.CareerModule,
            insurance_module_1.InsuranceModule,
            credit_module_1.CreditModule,
            chat_module_1.ChatModule,
            welfare_module_1.WelfareModule,
            community_module_1.CommunityModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map