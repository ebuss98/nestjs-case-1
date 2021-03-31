import { ICity } from "../interfaces/city.interface";

export class CreateCityDto {
    readonly name: string;
    readonly description: string;
    readonly architect: string;
}

