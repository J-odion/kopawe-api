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
exports.CareerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const career_service_1 = require("./career.service");
let CareerController = class CareerController {
    careerService;
    constructor(careerService) {
        this.careerService = careerService;
    }
    async createJob(data) {
        return this.careerService.createJob(data);
    }
    async findAll() {
        return this.careerService.findAll();
    }
    async createCourse(data) {
        return this.careerService.createCourse(data);
    }
    async getCourses(category) {
        return this.careerService.getCourses(category);
    }
    async book(memberId, data) {
        return this.careerService.bookCounseling(memberId, data);
    }
    async getSessions(memberId) {
        return this.careerService.getSessions(memberId);
    }
};
exports.CareerController = CareerController;
__decorate([
    (0, common_1.Post)('job'),
    (0, swagger_1.ApiOperation)({ summary: 'Post a new job listing' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "createJob", null);
__decorate([
    (0, common_1.Get)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'Find all jobs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('academy/course'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a Kopa Academy course/webinar' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Get)('academy/courses'),
    (0, swagger_1.ApiOperation)({ summary: 'Get academy courses' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "getCourses", null);
__decorate([
    (0, common_1.Post)('counseling/book/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Book a counseling session' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "book", null);
__decorate([
    (0, common_1.Get)('counseling/sessions/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get member counseling sessions' }),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "getSessions", null);
exports.CareerController = CareerController = __decorate([
    (0, swagger_1.ApiTags)('Career & Academy'),
    (0, common_1.Controller)('career'),
    __metadata("design:paramtypes", [career_service_1.CareerService])
], CareerController);
//# sourceMappingURL=career.controller.js.map