import { IsNumber, IsString } from "class-validator";

export class FindByCategoryDto {
    @IsNumber()
    limit: number

    degree?: string;
    fieldOfStudy?: string;
    program?: string;
}
