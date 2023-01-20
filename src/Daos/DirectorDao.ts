import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Director } from "src/Entities/Director";
import { Repository } from "typeorm";

export default class DirectorDao {
    constructor(
        @InjectRepository(Director)
        private _directorEntityRepository: Repository<Director>,
    ) { }

    async createDirector(DirectorEntity: Director): Promise<Director> {
        try {
            return await this._directorEntityRepository.save(DirectorEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }

    async findDirectorById(directorId: number): Promise<Director> {
        try {
            return await this._directorEntityRepository.findOne({ where: { id: directorId } });
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }
}