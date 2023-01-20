import { Injectable } from "@nestjs/common";
import ActorDao from "src/Daos/ActorDao";
import EntityEnum from "src/Enums/EntityEnum";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { DataShowContext } from "src/Strategy/DataShowStrategy/DataShowContext";
import { ActorService } from "./ActorService";

@Injectable()
export class DataShowService{

    constructor(private readonly _dataShowContext: DataShowContext) { }


    async saveDataShow(dataShowRequest: DataShowRequest){
        let strategy = this._dataShowContext.getContext(dataShowRequest.entity);
        strategy.addDataShow(dataShowRequest);
        return {result: "ok"};
    }
}