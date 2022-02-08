import { Module } from '@nestjs/common';
import { AdmissionService } from './admission.service';
import { AdmissionController } from './admission.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {AdmissionModel, AdmissionSchema} from "./admission.model";
import {FilesService} from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: AdmissionModel.name, schema: AdmissionSchema}
    ]),
  ],
  providers: [AdmissionService, FilesService],
  controllers: [AdmissionController]
})
export class AdmissionModule {}
