import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ApplicationModel, ApplicationSchema} from "./application.model";
import {ApplicationController} from "./application.controller";
import {ApplicationService} from "./application.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ApplicationModel.name, schema: ApplicationSchema}
    ]),
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService]
})
export class ApplicationModule {}
