import { IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    name: string;

    @IsString()
    location: string;

    @IsString()
    duration: number;

    @IsString()
    fieldOfCourse: string;

    @IsString()
    university: string;

    @IsString()
    city: string;

    @IsString()
    price: string;

    @IsString()
    deadline: string;

    @IsString()
    startDate: string;
}
