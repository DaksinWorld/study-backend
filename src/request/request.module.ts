import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import {MongooseModule} from "@nestjs/mongoose";
import {RequestModel, RequestSchema} from "./request.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: RequestModel.name, schema: RequestSchema}
    ]),
  ],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
