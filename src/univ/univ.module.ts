import { Module } from '@nestjs/common';
import { UnivService } from './univ.service';
import { UnivController } from './univ.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UnivModel, UnivSchema} from "./univ.model";
import {FilesService} from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UnivModel.name, schema: UnivSchema}
    ]),
  ],
  providers: [UnivService, FilesService],
  controllers: [UnivController]
})
export class UnivModule {}
