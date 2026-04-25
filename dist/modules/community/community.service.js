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
exports.CommunityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("./schemas/post.schema");
const identity_service_1 = require("../identity/identity.service");
let CommunityService = class CommunityService {
    postModel;
    pollModel;
    eventModel;
    identityService;
    constructor(postModel, pollModel, eventModel, identityService) {
        this.postModel = postModel;
        this.pollModel = pollModel;
        this.eventModel = eventModel;
        this.identityService = identityService;
    }
    async createPost(authorId, data) {
        const member = await this.identityService.getProfile(authorId);
        if (data.type === post_schema_1.PostType.OFFICIAL && !member.isAdmin) {
            throw new common_1.ForbiddenException('Only NYSC Admins can post official news');
        }
        if (data.type === post_schema_1.PostType.VERIFIED && !member.isVerified) {
            throw new common_1.ForbiddenException('Only verified members can post verified content');
        }
        const post = new this.postModel({
            ...data,
            authorId: new mongoose_2.Types.ObjectId(authorId),
        });
        return post.save();
    }
    async getFeed(state, category, lga) {
        const query = { parentId: null };
        if (state)
            query.state = state;
        if (lga)
            query.lga = lga;
        if (category)
            query.category = category;
        return this.postModel
            .find(query)
            .populate('authorId', 'fullName stateCode isVerified')
            .sort({ createdAt: -1 })
            .exec();
    }
    async getComments(postId) {
        return this.postModel
            .find({ parentId: new mongoose_2.Types.ObjectId(postId) })
            .populate('authorId', 'fullName isVerified')
            .sort({ createdAt: 1 })
            .exec();
    }
    async upvote(postId, memberId) {
        await this.postModel.updateOne({ _id: new mongoose_2.Types.ObjectId(postId) }, { $addToSet: { upvotes: new mongoose_2.Types.ObjectId(memberId) } });
    }
    async createPoll(data) {
        const poll = new this.pollModel(data);
        return poll.save();
    }
    async rsvpEvent(eventId, memberId) {
        await this.eventModel.updateOne({ _id: new mongoose_2.Types.ObjectId(eventId) }, { $addToSet: { rsvps: new mongoose_2.Types.ObjectId(memberId) } });
    }
};
exports.CommunityService = CommunityService;
exports.CommunityService = CommunityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.CommunityPost.name)),
    __param(1, (0, mongoose_1.InjectModel)(post_schema_1.Poll.name)),
    __param(2, (0, mongoose_1.InjectModel)(post_schema_1.CommunityEvent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        identity_service_1.IdentityService])
], CommunityService);
//# sourceMappingURL=community.service.js.map