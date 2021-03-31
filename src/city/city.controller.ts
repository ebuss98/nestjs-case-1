import {Controller, Req, Get, Post, Body, Param} from '@nestjs/common';
import { CreateCityDto } from "./dto/create-city.dto";
import { CityService } from "./city.service";
import { ICity } from "./interfaces/city.interface";

@Controller(':city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @Post('sights')
    create(@Param('city') city, @Body() data: CreateCityDto): Object {
        return this.cityService.create(city, data)
    }

    @Get('sights')
    findAll(@Param('city') city): Promise<Array<ICity>> {
        return this.cityService.findAll(city)
    }
}
