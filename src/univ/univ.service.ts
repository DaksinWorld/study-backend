import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UnivModel} from "./univ.model";
import {CreateUnivDto} from "./dto/create-univ.dto";

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

    async findProgramByName() {

    }

    async updateById(id: string, dto: CreateUnivDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.univModel.findByIdAndUpdate(id, obj, { new: true }).exec();
    }
}
