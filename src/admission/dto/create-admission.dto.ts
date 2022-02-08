import {IsString} from "class-validator";

export class CreateAdmissionDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    iconUrl: string;

    @IsString()
    color: string;

    @IsString()
    htmlText: string;
}
