import  {Document} from "mongoose";

export interface ICity extends Document {
    readonly name: string;
    readonly description: string;
    readonly architect: string;
}