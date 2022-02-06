import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CourseModel} from "./courses.model";
import {CreateCourseDto} from "./dto/create-course.dto";
import {FindProgramsDto} from "./dto/find-programs.dto";

@Injectable()
export class CoursesService {
    constructor(@InjectModel(CourseModel.name) private readonly productModel: Model<CourseModel>) {
    }

    async create(dto: CreateCourseDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.productModel.create(obj);
    }

    async getAll(){
        return this.productModel.find().exec();
    }

    async findById(id: string) {
        return this.productModel.findById(id).exec();
    }

    async deleteById(id: string) {
        return this.productModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateCourseDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.productModel.findByIdAndUpdate(id, obj, { new: true }).exec();
    }

    async findByCategory(dto: FindProgramsDto) {
        return this.productModel.aggregate([
            {
                $match: {
                    universities: dto.category
                }
            }
        ]).exec()
    }
}
