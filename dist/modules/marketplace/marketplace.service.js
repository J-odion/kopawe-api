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
exports.MarketplaceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const marketplace_schema_1 = require("./schemas/marketplace.schema");
let MarketplaceService = class MarketplaceService {
    productModel;
    constructor(productModel) {
        this.productModel = productModel;
    }
    async createListing(sellerId, data) {
        const product = new this.productModel({
            ...data,
            sellerId: new mongoose_2.Types.ObjectId(sellerId),
        });
        return product.save();
    }
    async findAll(query) {
        const { search, category, minPrice, maxPrice, page = 1, limit = 20, ...rest } = query;
        const filter = { status: 'AVAILABLE', ...rest };
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }
        if (category)
            filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice)
                filter.price.$gte = Number(minPrice);
            if (maxPrice)
                filter.price.$lte = Number(maxPrice);
        }
        const skip = (Number(page) - 1) * Number(limit);
        const [data, total] = await Promise.all([
            this.productModel.find(filter).skip(skip).limit(Number(limit)).exec(),
            this.productModel.countDocuments(filter),
        ]);
        return {
            data,
            meta: {
                total,
                page: Number(page),
                lastPage: Math.ceil(total / Number(limit)),
                limit: Number(limit),
            },
        };
    }
    async findByMember(memberId) {
        return this.productModel.find({ sellerId: new mongoose_2.Types.ObjectId(memberId) }).exec();
    }
    async findOne(id) {
        const product = await this.productModel.findById(id).exec();
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async updateLogistics(id, data) {
        const product = await this.findOne(id);
        product.logistics = { ...product.logistics, ...data };
        return product.save();
    }
};
exports.MarketplaceService = MarketplaceService;
exports.MarketplaceService = MarketplaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(marketplace_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MarketplaceService);
//# sourceMappingURL=marketplace.service.js.map