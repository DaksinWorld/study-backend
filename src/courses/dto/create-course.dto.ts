import { IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    nameEn: string;

    @IsString()
    nameSp: string;

    @IsString()
    location: string;

    @IsString()
    duration: number;

    @IsString()
    fieldOfCourseEn: string;

    @IsString()
    fieldOfCourseSp: string;

    @IsString()
    universitiesEn: string;

    @IsString()
    universitiesSp: string;

    @IsString()
    price: string;

    @IsString()
    deadline: string;

    @IsString()
    startDate: string;

    @IsString()
    createdAt: string;
}
