import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = ProductModel & Document

@Schema()
export class ProductModel {
    @Prop()
    programsEn: string

    @Prop()
    programsSp: string

    @Prop()
    degreeEn: string

    @Prop()
    degreeSp: string

    @Prop()
    fieldOfStudyEn: string

    @Prop()
    fieldOfStudySp: string

    @Prop()
    nameEn: string

    @Prop()
    nameSp: string

    @Prop()
    location: string;

    @Prop()
    language: string;

    @Prop()
    price: string;

    @Prop()
    duration: string;

    @Prop()
    foundationCoursePrice: string;

    @Prop()
    createdAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel)
