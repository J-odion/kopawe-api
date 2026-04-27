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
exports.AccommodationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accommodation_schema_1 = require("./schemas/accommodation.schema");
let AccommodationService = class AccommodationService {
    accommodationModel;
    constructor(accommodationModel) {
        this.accommodationModel = accommodationModel;
    }
    async createListing(ownerId, data) {
        const listing = new this.accommodationModel({
            ...data,
            ownerId: new mongoose_2.Types.ObjectId(ownerId),
        });
        return listing.save();
    }
    async findAll(query) {
        const { search, minPrice, maxPrice, roommateWanted, page = 1, limit = 20, ...rest } = query;
        const filter = { ...rest };
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: 'i' } },
            ];
        }
        if (roommateWanted !== undefined) {
            filter.roommateWanted = roommateWanted === 'true';
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice)
                filter.price.$gte = Number(minPrice);
            if (maxPrice)
                filter.price.$lte = Number(maxPrice);
        }
        const skip = (Number(page) - 1) * Number(limit);
        const [data, total] = await Promise.all([
            this.accommodationModel.find(filter).skip(skip).limit(Number(limit)).exec(),
            this.accommodationModel.countDocuments(filter),
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
        return this.accommodationModel.find({ ownerId: new mongoose_2.Types.ObjectId(memberId) }).exec();
    }
    async findRoommates(location) {
        return this.accommodationModel.find({
            location,
            roommateWanted: true,
            status: 'AVAILABLE'
        }).exec();
    }
};
exports.AccommodationService = AccommodationService;
exports.AccommodationService = AccommodationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accommodation_schema_1.Accommodation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccommodationService);
//# sourceMappingURL=accommodation.service.js.map