import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModel, ProductSchema } from "./products.model";
import { FilesService } from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ProductModel.name, schema: ProductSchema}
    ]),
  ],
  providers: [ProductService, FilesService],
  controllers: [ProductController]
})
export class ProductModule {}
