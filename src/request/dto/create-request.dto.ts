import {IsString} from "class-validator";

export class CreateRequestDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;
}
