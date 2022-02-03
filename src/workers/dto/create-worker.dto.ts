import {IsString} from "class-validator";

export class CreateWorkerDto {
    @IsString()
    firstName: string;

    @IsString()
    secondName: string;

    @IsString()
    description: string;

    @IsString()
    subtitle: string;
}
