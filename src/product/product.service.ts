import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductModel } from "./products.model";
import { CreateProductDto } from "./dto/create-product.dto";
import {FindByCategoryDto} from "./dto/find-by-category.dto";

@Injectable()
export class ProductService {
  constructor(@InjectModel(ProductModel.name) private readonly productModel: Model<ProductModel>) {
  }

  async create(dto: CreateProductDto) {
    return this.productModel.create(dto);
  }

  async getAll(){
    return this.productModel.find().exec();
  }

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async findByCategory(dto: FindByCategoryDto){
    return this.productModel.aggregate([
      {
        $match: {
          nameEn: dto.program
        }
      }
    ])
  }

  async deleteById(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

}
