import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tv } from "src/Entities/Tv";
import { Repository } from "typeorm";

export default class TvDao {
    constructor(
        @InjectRepository(Tv)
        private _movieEntityRepository: Repository<Tv>,
    ) { }

    async createTv(TvEntity: Tv): Promise<Tv> {
        try{
            return await this._movieEntityRepository.save(TvEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }

    async findTvById(tvId: number): Promise<Tv> {
        try {
            return await this._movieEntityRepository.findOne({ where: { id: tvId } });
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }
}