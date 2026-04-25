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
exports.CommunityEventSchema = exports.CommunityEvent = exports.PollSchema = exports.Poll = exports.CommunityPostSchema = exports.CommunityPost = exports.PostType = exports.PostCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
var PostCategory;
(function (PostCategory) {
    PostCategory["NEWS"] = "NEWS";
    PostCategory["SPORTS"] = "SPORTS";
    PostCategory["RELIGIOUS"] = "RELIGIOUS";
    PostCategory["PROGRAMS"] = "PROGRAMS";
    PostCategory["COUNSELING"] = "COUNSELING";
    PostCategory["DISCUSSION"] = "DISCUSSION";
})(PostCategory || (exports.PostCategory = PostCategory = {}));
var PostType;
(function (PostType) {
    PostType["OFFICIAL"] = "OFFICIAL";
    PostType["VERIFIED"] = "VERIFIED";
    PostType["GENERAL"] = "GENERAL";
})(PostType || (exports.PostType = PostType = {}));
let CommunityPost = class CommunityPost extends mongoose_2.Document {
    authorId;
    content;
    category;
    type;
    state;
    lga;
    images;
    upvotes;
    parentId;
    isDevotional;
};
exports.CommunityPost = CommunityPost;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Member', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommunityPost.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityPost.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: PostCategory }),
    (0, mongoose_1.Prop)({ enum: PostCategory, default: PostCategory.DISCUSSION }),
    __metadata("design:type", String)
], CommunityPost.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: PostType }),
    (0, mongoose_1.Prop)({ enum: PostType, default: PostType.GENERAL }),
    __metadata("design:type", String)
], CommunityPost.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityPost.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityPost.prototype, "lga", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], CommunityPost.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Member' }], default: [] }),
    __metadata("design:type", Array)
], CommunityPost.prototype, "upvotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'CommunityPost', default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommunityPost.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], CommunityPost.prototype, "isDevotional", void 0);
exports.CommunityPost = CommunityPost = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CommunityPost);
exports.CommunityPostSchema = mongoose_1.SchemaFactory.createForClass(CommunityPost);
let Poll = class Poll extends mongoose_2.Document {
    question;
    options;
    results;
    state;
};
exports.Poll = Poll;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Poll.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Poll.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: Map, of: Number, default: {} }),
    __metadata("design:type", Map)
], Poll.prototype, "results", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Poll.prototype, "state", void 0);
exports.Poll = Poll = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Poll);
exports.PollSchema = mongoose_1.SchemaFactory.createForClass(Poll);
let CommunityEvent = class CommunityEvent extends mongoose_2.Document {
    title;
    description;
    date;
    location;
    state;
    rsvps;
};
exports.CommunityEvent = CommunityEvent;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityEvent.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityEvent.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], CommunityEvent.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityEvent.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CommunityEvent.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Member' }], default: [] }),
    __metadata("design:type", Array)
], CommunityEvent.prototype, "rsvps", void 0);
exports.CommunityEvent = CommunityEvent = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CommunityEvent);
exports.CommunityEventSchema = mongoose_1.SchemaFactory.createForClass(CommunityEvent);
//# sourceMappingURL=post.schema.js.map