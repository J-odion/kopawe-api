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
exports.CareerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const career_service_1 = require("./career.service");
class CreateJobDto {
    title;
    company;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Software Intern' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tech Corp' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "company", void 0);
let CareerController = class CareerController {
    careerService;
    constructor(careerService) {
        this.careerService = careerService;
    }
    async getJobs() {
        return [{ id: 1, title: 'Graduate Trainee', company: 'Global Bank' }];
    }
    async apply() {
        return { status: 'Application Submitted' };
    }
};
exports.CareerController = CareerController;
__decorate([
    (0, common_1.Get)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'List available jobs and internships' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "getJobs", null);
__decorate([
    (0, common_1.Post)('apply/:jobId'),
    (0, swagger_1.ApiOperation)({ summary: 'Apply for a job' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareerController.prototype, "apply", null);
exports.CareerController = CareerController = __decorate([
    (0, swagger_1.ApiTags)('Career & Transitions'),
    (0, common_1.Controller)('career'),
    __metadata("design:paramtypes", [career_service_1.CareerService])
], CareerController);
//# sourceMappingURL=career.controller.js.map