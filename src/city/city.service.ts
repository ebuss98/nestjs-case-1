import {Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ICity} from "./interfaces/city.interface";
import {Model} from 'mongoose';
import {CreateCityDto} from "./dto/create-city.dto";


import * as _ from 'lodash'
@Injectable()
export class CityService {
    constructor(@InjectModel('City1') private readonly city1Model: Model<ICity>,
                @InjectModel('City2') private readonly city2Model: Model<ICity>,
                @InjectModel('City3') private readonly city3Model: Model<ICity>,
                ) {

    }
    async create(city, createCityDto: CreateCityDto): Promise<ICity> {
        let createdCity;
        if (city === "city-1") {
            createdCity = new this.city1Model(_.assignIn(createCityDto))
        }
        else if (city === "city-2") {
            createdCity = new this.city2Model(_.assignIn(createCityDto))
        }
        else if (city === "city-3") {
            createdCity = new this.city3Model(_.assignIn(createCityDto))
        }
        return await createdCity.save()
    }

    async findAll(city): Promise<Array<ICity>> {
        if (city === "city-1")
            return await this.city1Model.find({}).exec()
        else  if (city === "city-2")
            return await this.city2Model.find({}).exec()
        else  if (city === "city-3")
            return await this.city3Model.find({}).exec()

    }
}
