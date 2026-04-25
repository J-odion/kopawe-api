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
exports.EscrowTransactionSchema = exports.EscrowTransaction = exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product extends mongoose_2.Document {
    title;
    description;
    price;
    sellerId;
    condition;
    status;
    isBundle;
    bundleItems;
    logistics;
    category;
    images;
};
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "sellerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['NEW', 'USED'], default: 'NEW' }),
    __metadata("design:type", String)
], Product.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['AVAILABLE', 'SOLD', 'PENDING'], default: 'AVAILABLE' }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isBundle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Product.prototype, "bundleItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Product.prototype, "logistics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
let EscrowTransaction = class EscrowTransaction extends mongoose_2.Document {
    productId;
    buyerId;
    sellerId;
    amount;
    status;
};
exports.EscrowTransaction = EscrowTransaction;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Product', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EscrowTransaction.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EscrowTransaction.prototype, "buyerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EscrowTransaction.prototype, "sellerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], EscrowTransaction.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['HELD', 'RELEASED', 'DISPUTED', 'REFUNDED'], default: 'HELD' }),
    __metadata("design:type", String)
], EscrowTransaction.prototype, "status", void 0);
exports.EscrowTransaction = EscrowTransaction = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], EscrowTransaction);
exports.EscrowTransactionSchema = mongoose_1.SchemaFactory.createForClass(EscrowTransaction);
//# sourceMappingURL=marketplace.schema.js.map