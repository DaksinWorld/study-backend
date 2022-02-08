import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {AdmissionModel} from "./admission.model";
import {CreateAdmissionDto} from "./dto/create-admission.dto";

@Injectable()
export class AdmissionService {
    constructor(@InjectModel(AdmissionModel.name) private readonly admissionModel: Model<AdmissionModel>) {
    }

    async create(dto: CreateAdmissionDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.admissionModel.create(obj);
    }

    async getAll(){
        return this.admissionModel.find().exec();
    }

    async findById(id: string) {
        return this.admissionModel.findById(id).exec();
    }

    async deleteById(id: string) {
        return this.admissionModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: string, dto: CreateAdmissionDto, images) {
        const obj = {
            images,
            ...dto,
        }
        return this.admissionModel.findByIdAndUpdate(id, obj, { new: true }).exec();
    }
}
