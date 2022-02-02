import { ConfigService } from '@nestjs/config';
import {MongooseModuleOptions} from "@nestjs/mongoose";

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
	return {
		uri: getMongoString(configService)
	};
};

const getMongoString = (configService: ConfigService) => `mongodb+srv://admin:so5cGuwdf0yIghyi@cluster0.hjkkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

