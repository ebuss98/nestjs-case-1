import { Module } from '@nestjs/common';

import { CityService } from './city.service';
import { CityController } from './city.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { CitySchema } from "./schemas/city.schema";


//MongooseModule.forFeature([{name: 'City', schema: CitySchema}])
@Module({
  imports: [
    MongooseModule.forFeature([
    {
      name: 'City1',
      schema: CitySchema,
      collection: 'sights',
    },
  ],'city1db'),
    MongooseModule.forFeature([
      {
        name: 'City2',
        schema: CitySchema,
        collection: 'sights',
      },
    ],'city2db'),
    MongooseModule.forFeature([
      {
        name: 'City3',
        schema: CitySchema,
        collection: 'sights',
      },
    ],'city3db')
  ],
  providers: [CityService],
  controllers: [CityController]
})
export class CityModule {}
