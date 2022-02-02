import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CourseModel, CourseSchema} from "./courses.model";
import {FilesService} from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CourseModel.name, schema: CourseSchema}
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService, FilesService]
})
export class CoursesModule {}
