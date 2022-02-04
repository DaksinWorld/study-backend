import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = ProductModel & Document

@Schema()
export class ProductModel {
    @Prop()
    programs: string;

    @Prop()
    degree: string;

    @Prop()
    fieldOfStudy: string;

    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    description: string;

    @Prop()
    language: string;

    @Prop()
    price: number;

    @Prop()
    duration: number;

    @Prop()
    foundationCoursePrice: number;

    @Prop()
    createdAt: string;

    @Prop()
    images: [];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel)
