import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RequestDocument = RequestModel & Document

@Schema()
export class RequestModel {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;
}

export const RequestSchema = SchemaFactory.createForClass(RequestModel)
