import { Injectable } from "@nestjs/common";
import GenreDao from "src/Daos/GenreDao";
import { Genre } from "src/Entities/Genre";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";

@Injectable()
export class GenreService implements IDataShowStrategy {
    constructor(
        private readonly _genreDao: GenreDao,
    ) { }

    public addDataShow(dataShowRequest: DataShowRequest) {
        let genreEntity: Genre = this.builEntity(dataShowRequest)
        this.createGenre(genreEntity)
    }

    private builEntity(dataShowRequest: DataShowRequest): Genre {
        let genreEntity = new Genre();
        genreEntity.name = dataShowRequest.genre.name;
        return genreEntity;
    }

    async createGenre(genreEntity: Genre) {
        await this._genreDao.createGenre(genreEntity);
    }

}