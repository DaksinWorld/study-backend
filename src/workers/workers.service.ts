import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {WorkersModel} from "./workers.model";
import {Model} from "mongoose";
import {CreateWorkerDto} from "./dto/create-worker.dto";

@Injectable()
export class WorkersService {
    constructor(@InjectModel(WorkersModel.name) private readonly workersModel: Model<WorkersModel>) {
    }

    async create(dto: CreateWorkerDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.workersModel.create(obj);
    }

    async getAll(){
        return this.workersModel.find().exec();
    }

    async findById(id: string) {
        return this.workersModel.findById(id).exec();
    }

    async deleteById(id: string) {
        return this.workersModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateWorkerDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.workersModel.findByIdAndUpdate(id, obj, { new: true }).exec();
    }


}
