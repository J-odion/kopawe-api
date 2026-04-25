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
exports.MarketplaceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const marketplace_service_1 = require("./marketplace.service");
const marketplace_schema_1 = require("./schemas/marketplace.schema");
const class_validator_1 = require("class-validator");
class CreateProductDto {
    title;
    description;
    price;
    condition;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Student Bed Frame' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clean and sturdy bed frame' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USED' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "condition", void 0);
let MarketplaceController = class MarketplaceController {
    marketplaceService;
    constructor(marketplaceService) {
        this.marketplaceService = marketplaceService;
    }
    async create(sellerId, dto) {
        return this.marketplaceService.createListing(sellerId, dto);
    }
    async findAll(query) {
        return this.marketplaceService.findAll(query);
    }
    async findByMember(memberId) {
        return this.marketplaceService.findByMember(memberId);
    }
    async findOne(id) {
        return this.marketplaceService.findOne(id);
    }
    async updateLogistics(id, dto) {
        return this.marketplaceService.updateLogistics(id, dto);
    }
};
exports.MarketplaceController = MarketplaceController;
__decorate([
    (0, common_1.Post)('list/:sellerId'),
    (0, swagger_1.ApiOperation)({ summary: 'List a new product' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Product listed', type: marketplace_schema_1.Product }),
    __param(0, (0, common_1.Param)('sellerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateProductDto]),
    __metadata("design:returntype", Promise)
], MarketplaceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Search and filter marketplace products' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Keyword search for title/description' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of products', type: [marketplace_schema_1.Product] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarketplaceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('member/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all listings by a specific member' }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketplaceController.prototype, "findByMember", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product details', type: marketplace_schema_1.Product }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketplaceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('logistics/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update logistics/delivery status' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MarketplaceController.prototype, "updateLogistics", null);
exports.MarketplaceController = MarketplaceController = __decorate([
    (0, swagger_1.ApiTags)('Marketplace'),
    (0, common_1.Controller)('marketplace'),
    __metadata("design:paramtypes", [marketplace_service_1.MarketplaceService])
], MarketplaceController);
//# sourceMappingURL=marketplace.controller.js.map