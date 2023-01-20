import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import EpisodeDao from "src/Daos/EpisodeDao";
import { Episode } from "src/Entities/Episode";
import { Season } from "src/Entities/Season";
import { DataShowRequest } from "src/Models/Request/DataShowRequest";
import { DirectorResponse } from "src/Models/Response/DirectorResponse";
import { EpisodeRespose } from "src/Models/Response/EpisodeResponse";
import { IDataShowStrategy } from "src/Strategy/DataShowStrategy/IDataShowStrategy";
import { SeasonService } from "./SeasonService";
const moment = require('moment');

@Injectable()
export class EpisodeService implements IDataShowStrategy {

    constructor(
        private readonly _episodeDao: EpisodeDao,
        private readonly _seasonService: SeasonService
    ) { }

    async getEpisodeAndDirectorBynumberEpisodeAndNameTvShow(number: number, nameTvShow: string) {
        let episodeAndDirector = await this._episodeDao.findEpisodeAndDirectorBynumberEpisodeAndNameTvShow(number, nameTvShow);
        if (!episodeAndDirector) {
            throw new HttpException("The episode was not found", HttpStatus.NOT_FOUND);
        }
        return this.buildEpisodeAndDirectorResponse(episodeAndDirector);
    }

    private buildEpisodeAndDirectorResponse(episodeResponse) {
        let { idEpisode, nameEpisode, numberEpisode, releaseDateEpisode } = episodeResponse;
        let { idDirector, nameDirector, lastNameDirector, dateBirthDirector } = episodeResponse;
        let episode: EpisodeRespose = new EpisodeRespose(idEpisode, nameEpisode, numberEpisode, releaseDateEpisode);
        let director: DirectorResponse = new DirectorResponse(idDirector, nameDirector, lastNameDirector, dateBirthDirector);
        return { episode: episode, director: director }
    }


    async addDataShow(dataShowRequest: DataShowRequest) {
        let { seasonId } = dataShowRequest.episode;
        if (!seasonId) {
            throw new BadRequestException("The attribute is required");
        }
        let seasonEntity: Season = await this._seasonService.getSeason(seasonId);
        let EpisodeEntity: Episode = this.builEntity(dataShowRequest, seasonEntity)
        await this.createEpisode(EpisodeEntity)
    }

    private builEntity(dataShowRequest: DataShowRequest, seasonEntity: Season): Episode {
        let EpisodeEntity = new Episode();
        let { name, numberEpisode, releaseDate, seasonId } = dataShowRequest.episode;
        EpisodeEntity.name = name;
        EpisodeEntity.numberEpisode = numberEpisode;
        EpisodeEntity.releaseDate = moment(moment(releaseDate, 'DD-MM-YYYY')).format('YYYY-MM-DD');
        EpisodeEntity.seasonId = seasonId
        EpisodeEntity.season = seasonEntity;
        return EpisodeEntity;
    }

    async createEpisode(EpisodeEntity: Episode) {
        await this._episodeDao.createEpisode(EpisodeEntity);
    }


}