import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { ProductModule } from './product/product.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';
import { WorkersModule } from './workers/workers.module';
import {FilesService} from "./files/files.service";
import { UnivModule } from './univ/univ.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      AuthModule,
      MongooseModule.forRoot('mongodb+srv://admin:so5cGuwdf0yIghyi@cluster0.b28ta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      ProductModule,
      FilesModule,
      CoursesModule,
      WorkersModule,
      UnivModule
  ],
  controllers: [AppController],
  providers: [AppService, FilesService],
})
export class AppModule {}
