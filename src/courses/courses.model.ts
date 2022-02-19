import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CourseDocument = CourseModel & Document

@Schema()
export class CourseModel {
    @Prop()
    nameEn: string;

    @Prop()
    nameSp: string;

    @Prop()
    location: string;

    @Prop()
    duration: number;

    @Prop()
    fieldOfCourseEn: string;

    @Prop()
    fieldOfCourseSp: string;

    @Prop()
    universitiesEn: string;

    @Prop()
    universitiesSp: string;

    @Prop()
    price: string;

    @Prop()
    deadline: string;

    @Prop()
    startDate: string;

    @Prop()
    createdAt: string;

    @Prop()
    images: [];
}

export const CourseSchema = SchemaFactory.createForClass(CourseModel)
