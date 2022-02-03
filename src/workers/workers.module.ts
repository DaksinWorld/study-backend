import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {WorkersModel, WorkersSchema} from "./workers.model";
import {FilesService} from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: WorkersModel.name, schema: WorkersSchema}
    ]),
  ],
  providers: [WorkersService, FilesService],
  controllers: [WorkersController]
})
export class WorkersModule {}
