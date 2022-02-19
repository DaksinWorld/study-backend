import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateRequestDto} from "./dto/create-request.dto";
import {ApplicationModel} from "./application.model";

@Injectable()
export class ApplicationService {
    constructor(@InjectModel(ApplicationModel.name) private readonly applicationModel: Model<ApplicationModel>) {
    }

    async create(dto: CreateRequestDto) {
        const obj = {
            ...dto,
        }
        return this.applicationModel.create(obj);
    }

    async getAll(){
        return this.applicationModel.find().exec();
    }

    async getOne(id:string){
        return this.applicationModel.findById(id);
    }

    async deleteById(id: string) {
        return this.applicationModel.findByIdAndDelete(id).exec();
    }

}
