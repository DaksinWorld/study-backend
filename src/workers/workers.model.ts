import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WorkersDocument = WorkersModel & Document

@Schema()
export class WorkersModel {
    @Prop()
    firstName: string;

    @Prop()
    secondName: string;

    @Prop()
    description: string;

    @Prop()
    subtitle: string;

    @Prop()
    images: [];
}

export const WorkersSchema = SchemaFactory.createForClass(WorkersModel)
