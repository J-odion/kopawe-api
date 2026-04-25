"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelfareModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const welfare_controller_1 = require("./welfare.controller");
const welfare_service_1 = require("./welfare.service");
const welfare_schema_1 = require("./schemas/welfare.schema");
let WelfareModule = class WelfareModule {
};
exports.WelfareModule = WelfareModule;
exports.WelfareModule = WelfareModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: welfare_schema_1.WelfareFund.name, schema: welfare_schema_1.WelfareFundSchema },
                { name: welfare_schema_1.WelfareRequest.name, schema: welfare_schema_1.WelfareRequestSchema },
            ]),
        ],
        controllers: [welfare_controller_1.WelfareController],
        providers: [welfare_service_1.WelfareService],
        exports: [welfare_service_1.WelfareService],
    })
], WelfareModule);
//# sourceMappingURL=welfare.module.js.map