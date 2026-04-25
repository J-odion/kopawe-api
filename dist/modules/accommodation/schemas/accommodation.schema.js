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
exports.AccommodationSchema = exports.Accommodation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let Accommodation = class Accommodation extends mongoose_2.Document {
    title;
    location;
    price;
    ownerId;
    status;
    isVerified;
    amenities;
    roommateWanted;
};
exports.Accommodation = Accommodation;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Accommodation.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Accommodation.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Accommodation.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Accommodation.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ enum: ['AVAILABLE', 'TAKEN'], default: 'AVAILABLE' }),
    __metadata("design:type", String)
], Accommodation.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Accommodation.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Accommodation.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Accommodation.prototype, "roommateWanted", void 0);
exports.Accommodation = Accommodation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Accommodation);
exports.AccommodationSchema = mongoose_1.SchemaFactory.createForClass(Accommodation);
//# sourceMappingURL=accommodation.schema.js.map