import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsString()
  description: string;

  @IsString()
  language: string;

  @IsString()
  price: string;

  @IsString()
  duration: string;

  @IsString()
  degree: string;

  @IsString()
  fieldOfStudy: string;

  @IsString()
  programs: string;

  @IsString()
  foundationCoursePrice: string;

  @IsString()
  createdAt: string;

}
