import {IsString} from "class-validator";

export class FindProgramsDto {
    @IsString()
    university: string;
}
