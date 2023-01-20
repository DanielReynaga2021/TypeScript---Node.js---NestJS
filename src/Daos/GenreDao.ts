import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Genre } from "src/Entities/Genre";
import { Repository } from "typeorm";

export default class GenreDao {
    constructor(
        @InjectRepository(Genre)
        private _actorEntityRepository: Repository<Genre>,
    ) { }

    async createGenre(GenreEntity: Genre): Promise<Genre> {
        try{
            return await this._actorEntityRepository.save(GenreEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }
}