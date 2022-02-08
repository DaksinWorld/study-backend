import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AdmissionDocument = AdmissionModel & Document

@Schema()
export class AdmissionModel {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    iconUrl: string;

    @Prop()
    color: string;

    @Prop()
    htmlText: string;

    @Prop()
    images: [];
}

export const AdmissionSchema = SchemaFactory.createForClass(AdmissionModel)
