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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const announcement_schema_1 = require("./schemas/announcement.schema");
const class_validator_1 = require("class-validator");
class CreateAnnouncementDto {
    title;
    content;
    targetAudience;
    type;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NYSC Pop-up Event' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnnouncementDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Join us for the digital skill-up session.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnnouncementDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'LAGOS' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnnouncementDto.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'INFO' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnnouncementDto.prototype, "type", void 0);
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async createAnnouncement(dto) {
        return this.adminService.createAnnouncement(dto);
    }
    async getAnnouncements() {
        return this.adminService.getAnnouncements();
    }
    async getStats() {
        return this.adminService.getSystemStats();
    }
    async createTicket(id, dto) {
        return this.adminService.createTicket(id, dto);
    }
    async getTickets() {
        return this.adminService.getTickets();
    }
    async getEngagementStats() {
        return {
            activeMembers: 1250,
            verifiedPercentage: 85,
            totalPosts: 4500,
            totalTransfers: 8900,
            mostActiveState: 'Lagos',
        };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('announcements'),
    (0, swagger_1.ApiOperation)({ summary: 'Send a broadcast announcement to members' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Announcement sent', type: announcement_schema_1.Announcement }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAnnouncementDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createAnnouncement", null);
__decorate([
    (0, common_1.Get)('announcements'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all announcements' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of announcements', type: [announcement_schema_1.Announcement] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAnnouncements", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get system-wide stats for NYSC officials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'System statistics retrieved' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)('tickets/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new support ticket/complaint' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Get)('tickets'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all support tickets (Admin only)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getTickets", null);
__decorate([
    (0, common_1.Get)('engagement'),
    (0, swagger_1.ApiOperation)({ summary: 'Get system-wide engagement analytics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getEngagementStats", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('NYSC Admin'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map