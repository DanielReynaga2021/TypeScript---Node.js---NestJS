import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Actor } from "src/Entities/Actor";
import { Repository } from "typeorm";

export default class ActorDao {
    constructor(
        @InjectRepository(Actor)
        private _actorEntityRepository: Repository<Actor>,
    ) { }

    async createActor(ActorEntity: Actor): Promise<Actor> {
        try{
            return await this._actorEntityRepository.save(ActorEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "database error");
        }
    }
}