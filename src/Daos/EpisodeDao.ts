import { InjectRepository } from "@nestjs/typeorm";
import { Director } from "src/Entities/Director";
import { Episode } from "src/Entities/Episode";
import { Season } from "src/Entities/Season";
import { Tv } from "src/Entities/Tv";
import { Repository } from "typeorm";


export default class EpisodeDao {
    constructor(
        @InjectRepository(Episode)
        private _episodeRepository: Repository<Episode>,
    ) { }

    async findEpisodeAndDirectorBynumberEpisodeAndNameTvShow(numberEpisode: number, nameTvShow: string) {
        const qb = this._episodeRepository.createQueryBuilder("e")
        qb.select("e.id", "idEpisode")
            .addSelect("e.name", "nameEpisode")
            .addSelect("e.numberEpisode", "numberEpisode")
            .addSelect("e.releaseDate", "releaseDateEpisode")
            .addSelect("d.id", "idDirector")
            .addSelect("d.name", "nameDirector")
            .addSelect("d.lastName", "lastNameDirector")
            .addSelect("d.dateBirth", "dateBirthDirector")
            .innerJoin(Season, 's', "s.id = e.season")
            .innerJoin(Tv, 't', "t.id = s.tv")
            .innerJoin(Director, 'd', "d.id = t.director")
            .where("e.numberEpisode = :numberEpisode", { numberEpisode: numberEpisode })
            .andWhere("t.name = :nameTvShow", { nameTvShow: nameTvShow })
        return qb.getRawOne();
    }
}