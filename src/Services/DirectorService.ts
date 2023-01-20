import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import DirectorDao from "src/Daos/DirectorDao";
const moment = require('moment');
import { Director } from "src/Entities/Director";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";

@Injectable()
export class DirectorService implements IDataShowStrategy{
    constructor(
            private readonly _directorDao: DirectorDao,
        ) { }
    
    public addDataShow(dataShowRequest: DataShowRequest){
        let directorEntity: Director = this.builEntity(dataShowRequest)
        this.createDirector(directorEntity)
    }

    private builEntity(dataShowRequest: DataShowRequest): Director {
        let directorEntity = new Director();
        let {name, lastName, dateBirth} = dataShowRequest.director;
        directorEntity.name = name;
        directorEntity.lastName = lastName;
        directorEntity.dateBirth = moment(moment(dateBirth, 'DD-MM-YYYY')).format('YYYY-MM-DD');
        return directorEntity;
    }

    async createDirector(directorEntity: Director){
        await this._directorDao.createDirector(directorEntity);
    }

    async getDirector(directorId: number): Promise<Director>{
        let director: Director = await this._directorDao.findDirectorById(directorId);
        if(!director){
            throw new NotFoundException("The director was not found")
        }
        return director;
    }
}  