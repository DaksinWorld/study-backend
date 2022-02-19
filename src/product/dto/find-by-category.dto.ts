import { IsNumber, IsString } from "class-validator";

export class FindByCategoryDto {
    @IsString()
    program: string;
}
