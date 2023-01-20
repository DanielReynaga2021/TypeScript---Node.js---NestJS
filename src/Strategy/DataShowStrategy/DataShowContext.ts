import { Injectable } from "@nestjs/common";
import EntityEnum from "src/Enums/EntityEnum";
import { ActorService } from "src/Services/ActorService";
import { DirectorService } from "src/Services/DirectorService";
import { EpisodeService } from "src/Services/EpisodeService";
import { GenreService } from "src/Services/GenreService";
import { MovieService } from "src/Services/MovieService";
import { SeasonService } from "src/Services/SeasonService";
import { TvService } from "src/Services/TvService";


@Injectable()
export class DataShowContext {
    constructor(private readonly _actorService: ActorService,
        private readonly _genreService: GenreService,
        private readonly _directorService: DirectorService,
        private readonly _movieService: MovieService,
        private readonly _tvService: TvService,
        private readonly _seasonService: SeasonService,
        private readonly _episodeService: EpisodeService,
    ) { }

    public getContext(entity: string) {

        switch (entity) {
            case EntityEnum.GENRE:
                return this._genreService;
            case EntityEnum.DIRECTOR:
                return this._directorService;
            case EntityEnum.ACTOR:
                return this._actorService;
            case EntityEnum.MOVIE:
                return this._movieService;
            case EntityEnum.TV:
            return this._tvService;
            case EntityEnum.SEASON:
                return this._seasonService;
            case EntityEnum.EPISODE:
                return this._episodeService;
            default:
                break;
        }
    }
}