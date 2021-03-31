import * as mongoose from 'mongoose'

export const CitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    architect: {type: String, required: true}
});