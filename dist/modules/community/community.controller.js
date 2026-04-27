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
const post_schema_1 = require("./schemas/post.schema");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
let CommunityController = class CommunityController {
    communityService;
    constructor(communityService) {
        this.communityService = communityService;
    }
    async create(authorId, data) {
        return this.communityService.createPost(authorId, data);
    }
    async getFeed(state, category, lga, page = 1, limit = 20) {
        return this.communityService.getFeed(state, category, lga, page, limit);
    }
    async addComment(postId, authorId, data) {
        return this.communityService.createPost(authorId, { ...data, parentId: postId });
    }
    async getComments(postId) {
        return this.communityService.getComments(postId);
    }
    async upvote(postId, memberId) {
        return this.communityService.upvote(postId, memberId);
    }
    async createPoll(data) {
        return this.communityService.createPoll(data);
    }
    async rsvp(eventId, memberId) {
        return this.communityService.rsvpEvent(eventId, memberId);
    }
};
exports.CommunityController = CommunityController;
__decorate([
    (0, common_1.Post)('post'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new post (News, Sports, Religious, etc.)' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('feed'),
    (0, swagger_1.ApiOperation)({ summary: 'Get state-based regional feed' }),
    (0, swagger_1.ApiQuery)({ name: 'state', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', enum: post_schema_1.PostCategory, required: false }),
    __param(0, (0, common_1.Query)('state')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('lga')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getFeed", null);
__decorate([
    (0, common_1.Post)('comment/:postId'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a comment to a post' }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "addComment", null);
__decorate([
    (0, common_1.Get)('comments/:postId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get comments for a post' }),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "getComments", null);
__decorate([
    (0, common_1.Patch)('upvote/:postId'),
    (0, swagger_1.ApiOperation)({ summary: 'Upvote a post' }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "upvote", null);
__decorate([
    (0, common_1.Post)('poll'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a live poll' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "createPoll", null);
__decorate([
    (0, common_1.Post)('rsvp/:eventId'),
    (0, swagger_1.ApiOperation)({ summary: 'RSVP to a Meet & Greet event' }),
    __param(0, (0, common_1.Param)('eventId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "rsvp", null);
exports.CommunityController = CommunityController = __decorate([
    (0, swagger_1.ApiTags)('Community & Social'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
//# sourceMappingURL=community.controller.js.map