import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Season } from "src/Entities/Season";
import { Repository } from "typeorm";

export default class SeasonDao {
    constructor(
        @InjectRepository(Season)
        private _seasonEntityRepository: Repository<Season>,
    ) { }

    async createSeason(SeasonEntity: Season): Promise<Season> {
        try{
            return await this._seasonEntityRepository.save(SeasonEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }

    async findSeasonById(seasonId: number): Promise<Season> {
        try {
            return await this._seasonEntityRepository.findOne({ where: { id: seasonId } });
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }
}