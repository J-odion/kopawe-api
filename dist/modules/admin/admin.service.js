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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const announcement_schema_1 = require("./schemas/announcement.schema");
const ticket_schema_1 = require("./schemas/ticket.schema");
const identity_service_1 = require("../identity/identity.service");
let AdminService = class AdminService {
    announcementModel;
    ticketModel;
    identityService;
    constructor(announcementModel, ticketModel, identityService) {
        this.announcementModel = announcementModel;
        this.ticketModel = ticketModel;
        this.identityService = identityService;
    }
    async createTicket(memberId, data) {
        const ticket = new this.ticketModel({
            ...data,
            memberId: new mongoose_2.Types.ObjectId(memberId),
        });
        return ticket.save();
    }
    async getTickets() {
        return this.ticketModel.find().populate('memberId').exec();
    }
    async createAnnouncement(data) {
        const announcement = new this.announcementModel(data);
        return announcement.save();
    }
    async getAnnouncements() {
        return this.announcementModel.find().sort({ createdAt: -1 }).exec();
    }
    async getSystemStats() {
        return {
            totalCorpsMembers: 150230,
            verifiedPercentage: 92,
            activeLoans: 4500,
            totalDisbursed: 250000000,
            topLga: 'Ikeja',
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(announcement_schema_1.Announcement.name)),
    __param(1, (0, mongoose_1.InjectModel)(ticket_schema_1.SupportTicket.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        identity_service_1.IdentityService])
], AdminService);
//# sourceMappingURL=admin.service.js.map