import {IsString} from "class-validator";

export class CreateUnivDto{
    @IsString()
    nameEn: string;

    @IsString()
    nameSp: string;

    @IsString()
    descriptionEn: string;

    @IsString()
    descriptionSp: string;

    @IsString()
    location: string;

    @IsString()
    founded: string;

    @IsString()
    intStudents: string;

    @IsString()
    totalStudents: string;

    @IsString()
    faculty: string;
}
