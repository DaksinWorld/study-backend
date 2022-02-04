import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CourseDocument = CourseModel & Document

@Schema()
export class CourseModel {
    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    duration: number;

    @Prop()
    fieldOfCourse: string;

    @Prop()
    universities: string;

    @Prop()
    price: string;

    @Prop()
    deadline: string;

    @Prop()
    cities: string;

    @Prop()
    startDate: string;

    @Prop()
    createdAt: string;

    @Prop()
    images: [];
}

export const CourseSchema = SchemaFactory.createForClass(CourseModel)
