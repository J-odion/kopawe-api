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
exports.CareerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const career_schema_1 = require("./schemas/career.schema");
const academy_schema_1 = require("./schemas/academy.schema");
let CareerService = class CareerService {
    jobModel;
    academyModel;
    counselingModel;
    constructor(jobModel, academyModel, counselingModel) {
        this.jobModel = jobModel;
        this.academyModel = academyModel;
        this.counselingModel = counselingModel;
    }
    async createJob(data) {
        const job = new this.jobModel(data);
        return job.save();
    }
    async findAll(query = {}) {
        const { page = 1, limit = 20, ...rest } = query;
        const filter = { status: 'OPEN', ...rest };
        const skip = (Number(page) - 1) * Number(limit);
        const [data, total] = await Promise.all([
            this.jobModel.find(filter).skip(skip).limit(Number(limit)).exec(),
            this.jobModel.countDocuments(filter),
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
    async createCourse(data) {
        return new this.academyModel(data).save();
    }
    async getCourses(category) {
        const query = category ? { category } : {};
        return this.academyModel.find(query).exec();
    }
    async bookCounseling(memberId, data) {
        return new this.counselingModel({
            ...data,
            memberId: new mongoose_2.Types.ObjectId(memberId),
        }).save();
    }
    async getSessions(memberId) {
        return this.counselingModel.find({ memberId: new mongoose_2.Types.ObjectId(memberId) }).exec();
    }
};
exports.CareerService = CareerService;
exports.CareerService = CareerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(career_schema_1.Job.name)),
    __param(1, (0, mongoose_1.InjectModel)(academy_schema_1.AcademyCourse.name)),
    __param(2, (0, mongoose_1.InjectModel)(academy_schema_1.CounselingSession.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CareerService);
//# sourceMappingURL=career.service.js.map