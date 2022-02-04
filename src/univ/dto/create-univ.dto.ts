import {IsString} from "class-validator";

export class CreateUnivDto{
    @IsString()
    name: string;

    @IsString()
    description: string;

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
