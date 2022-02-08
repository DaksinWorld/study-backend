import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUnivDto} from "../univ/dto/create-univ.dto";
import {RequestModel} from "./request.model";
import {CreateRequestDto} from "./dto/create-request.dto";

@Injectable()
export class RequestService {
    constructor(@InjectModel(RequestModel.name) private readonly requestModel: Model<RequestModel>) {
    }

    async create(dto: CreateRequestDto) {
        const obj = {
            ...dto,
        }
        return this.requestModel.create(obj);
    }

    async getAll(){
        return this.requestModel.find().exec();
    }

    async deleteById(id: string) {
        return this.requestModel.findByIdAndDelete(id).exec();
    }

}
