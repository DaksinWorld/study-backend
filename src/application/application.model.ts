import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ApplicationDocument = ApplicationModel & Document

@Schema()
export class ApplicationModel {
    @Prop()
    firstName: string;

    @Prop()
    secondName: string;

    @Prop()
    day: number;

    @Prop()
    month: string;

    @Prop()
    year: number;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    totalPrice: number;

    @Prop()
    package: any[];

    @Prop()
    gender: string;

    @Prop({ type: () => [String]})
    program: string[];
}

export const ApplicationSchema = SchemaFactory.createForClass(ApplicationModel)
