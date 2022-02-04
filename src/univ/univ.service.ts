import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {WorkersModel} from "../workers/workers.model";
import {Model} from "mongoose";
import {CreateWorkerDto} from "../workers/dto/create-worker.dto";
import {UnivModel} from "./univ.model";
import {CreateUnivDto} from "./dto/create-univ.dto";
import {FindProgramsDto} from "./dto/find-programs.dto";

@Injectable()
export class UnivService {
    constructor(@InjectModel(UnivModel.name) private readonly univModel: Model<UnivModel>) {
    }

    async create(dto: CreateUnivDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.univModel.create(obj);
    }

    async getAll(){
        return this.univModel.find().exec();
    }

    async findById(id: string) {
        return this.univModel.findById(id).exec();
    }

    async deleteById(id: string) {
        return this.univModel.findByIdAndDelete(id).exec();
    }

    async findPrograms(dto: FindProgramsDto) {
        return this.univModel.aggregate([
            {
                $lookup: {
                    from: 'coursemodels',
                    localField: 'name',
                    foreignField: 'universities',
                    as: 'programs'
                }
            },
            {
                $addFields: {
                    programsCount: {$size: '$programs'}
                }
            }
        ]).exec()
    }

    async updateById(id: string, dto: CreateUnivDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.univModel.findByIdAndUpdate(id, obj, { new: true }).exec();
    }
}
