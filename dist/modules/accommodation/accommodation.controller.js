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
exports.AccommodationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accommodation_service_1 = require("./accommodation.service");
const accommodation_schema_1 = require("./schemas/accommodation.schema");
const class_validator_1 = require("class-validator");
class CreateAccommodationDto {
    title;
    location;
    price;
    roommateWanted;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 Bedroom Flat near Camp' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccommodationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Iyana Ipaja, Lagos' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccommodationDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAccommodationDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAccommodationDto.prototype, "roommateWanted", void 0);
let AccommodationController = class AccommodationController {
    accommodationService;
    constructor(accommodationService) {
        this.accommodationService = accommodationService;
    }
    async create(ownerId, dto) {
        return this.accommodationService.createListing(ownerId, dto);
    }
    async findAll(location) {
        return this.accommodationService.findAll(location ? { location } : {});
    }
    async findRoommates(location) {
        return this.accommodationService.findRoommates(location);
    }
};
exports.AccommodationController = AccommodationController;
__decorate([
    (0, common_1.Post)('list/:ownerId'),
    (0, swagger_1.ApiOperation)({ summary: 'List a new accommodation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Accommodation listed', type: accommodation_schema_1.Accommodation }),
    __param(0, (0, common_1.Param)('ownerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateAccommodationDto]),
    __metadata("design:returntype", Promise)
], AccommodationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search for accommodations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of accommodations', type: [accommodation_schema_1.Accommodation] }),
    __param(0, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccommodationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('roommates'),
    (0, swagger_1.ApiOperation)({ summary: 'Find roommate listings' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of roommate matches', type: [accommodation_schema_1.Accommodation] }),
    __param(0, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccommodationController.prototype, "findRoommates", null);
exports.AccommodationController = AccommodationController = __decorate([
    (0, swagger_1.ApiTags)('Accommodation'),
    (0, common_1.Controller)('accommodation'),
    __metadata("design:paramtypes", [accommodation_service_1.AccommodationService])
], AccommodationController);
//# sourceMappingURL=accommodation.controller.js.map