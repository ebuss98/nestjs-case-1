import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { CityModule } from './city/city.module';
import {CitySchema} from "./city/schemas/city.schema";
//    "@types/mongoose": "^5.10.4",
const environment = process.env.NODE_ENV || 'development'
const connectionUrl = 'mongodb://localhost:27017/'
//
// function setConnection(dbName, connectionName) {
//     return MongooseModule.forRoot(
//         connectionUrl+dbName,
//         {
//             connectionName,
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }
//     )
// }

@Module({
  imports: [
      CityModule,
      // ConfigModule.forRoot({
      //   envFilePath: `.env.${environment}`,
      //   isGlobal: true,
      // }),
      MongooseModule.forRoot(
          'mongodb://localhost:27017/city-1',
          {
            connectionName: 'city1db',
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
      ),
      MongooseModule.forRoot(
          'mongodb://localhost:27017/city-2',
          {
              connectionName: 'city2db',
              useNewUrlParser: true,
              useUnifiedTopology: true
          }
      ),
      MongooseModule.forRoot(
          'mongodb://localhost:27017/city-3',
          {
              connectionName: 'city3db',
              useNewUrlParser: true,
              useUnifiedTopology: true
          }
      )
  ],
})
export class AppModule {}

