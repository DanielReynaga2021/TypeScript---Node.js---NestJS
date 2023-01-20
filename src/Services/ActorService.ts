import { Injectable } from "@nestjs/common";
const moment = require('moment');
import ActorDao from "src/Daos/ActorDao";
import { Actor } from "src/Entities/Actor";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";

@Injectable()
export class ActorService implements IDataShowStrategy{
    constructor(
            private readonly _actorDao: ActorDao,
        ) { }
    
    public addDataShow(dataShowRequest: DataShowRequest){
        let actorEntity: Actor = this.builEntity(dataShowRequest)
        this.createActor(actorEntity)
    }

    private builEntity(dataShowRequest: DataShowRequest): Actor {
        let actorEntity = new Actor();
        let {name, lastName, dateBirth} = dataShowRequest.actor;
        actorEntity.name = name;
        actorEntity.lastName = lastName;
        actorEntity.dateBirth = moment(moment(dateBirth, 'DD-MM-YYYY')).format('YYYY-MM-DD');
        return actorEntity;
    }

    async createActor(actorEntity: Actor){
        await this._actorDao.createActor(actorEntity);
    }
}  