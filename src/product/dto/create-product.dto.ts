import { IsString} from "class-validator";

export class CreateProductDto {
  @IsString()
  programsEn: string

  @IsString()
  programsSp: string

  @IsString()
  degreeEn: string

  @IsString()
  degreeSp: string

  @IsString()
  fieldOfStudyEn: string

  @IsString()
  fieldOfStudySp: string

  @IsString()
  nameEn: string

  @IsString()
  nameSp: string

  @IsString()
  location: string;

  @IsString()
  language: string;

  @IsString()
  price: string;

  @IsString()
  duration: string;

  @IsString()
  foundationCoursePrice: string;

  @IsString()
  createdAt: string;

}
