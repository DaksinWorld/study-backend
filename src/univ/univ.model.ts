import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UnivDocument = UnivModel & Document

@Schema()
export class UnivModel {
    @Prop()
    nameEn: string;

    @Prop()
    nameSp: string;

    @Prop()
    descriptionEn: string;

    @Prop()
    descriptionSp: string;

    @Prop()
    location: string;

    @Prop()
    founded: string;

    @Prop()
    intStudents: string;

    @Prop()
    totalStudents: string;

    @Prop()
    faculty: string;

    @Prop()
    images: [];
}

export const UnivSchema = SchemaFactory.createForClass(UnivModel)
