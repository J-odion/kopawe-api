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
exports.CommunityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const community_service_1 = require("./community.service");
const class_validator_1 = require("class-validator");
class CreatePostDto {
    content;
    state;
    lga;
    images;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "lga", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "images", void 0);
let CommunityController = class CommunityController {
    communityService;
    constructor(communityService) {
        this.communityService = communityService;
    }
    async create(authorId, dto) {
        return this.communityService.createPost(authorId, dto);
    }
    async getFeed(state, lga) {
        return this.communityService.getRegionalFeed(state, lga);
    }
};
exports.CommunityController = CommunityController;
__decorate([
    (0, common_1.Post)('post/:authorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new community post' }),
    __param(0, (0, common_1.Param)('authorId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreatePostDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('feed'),
    (0, swagger_1.ApiOperation)({ summary: 'Get regional community feed' }),
    __param(0, (0, common_1.Query)('state')),
    __param(1, (0, common_1.Query)('lga')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getFeed", null);
exports.CommunityController = CommunityController = __decorate([
    (0, swagger_1.ApiTags)('Community & Social'),
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
//# sourceMappingURL=community.controller.js.map