import {IsArray, IsNumber, IsString} from "class-validator";

export class CreateRequestDto {
    @IsString()
    firstName: string;

    @IsString()
    secondName: string;

    @IsNumber()
    day: number;

    @IsString()
    month: string;

    @IsNumber()
    year: number;

    @IsString()
    email: string;

    @IsNumber()
    totalPrice: number;

    @IsString()
    phone: string;

    @IsArray()
    package: any[];

    @IsString()
    gender: string;

    @IsArray()
    program: string;
}
