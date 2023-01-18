import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import EpisodeDao from "src/Daos/EpisodeDao";
import { DirectorResponse } from "src/Models/Response/DirectorResponse";
import { EpisodeRespose } from "src/Models/Response/EpisodeResponse";

@Injectable()
export class EpisodeService {

    constructor(
        private readonly _episodeDao: EpisodeDao
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
}