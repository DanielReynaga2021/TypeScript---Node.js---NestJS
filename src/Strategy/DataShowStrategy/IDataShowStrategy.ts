import { DataShowRequest } from "src/Models/Request/DataShowRequest";

export interface IDataShowStrategy{
   addDataShow(dataShowRequest: DataShowRequest);
}