import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/Entities/UserEntity";
import { Repository } from "typeorm";

export default class UserDao {
    constructor(
        @InjectRepository(UserEntity)
        private _userEntityRepository: Repository<UserEntity>,
    ) { }

    async createUser(userEntity: UserEntity): Promise<UserEntity> {
        try{
            return await this._userEntityRepository.save(userEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "duplicate email");
        }
        
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        let user: UserEntity | null = await this._userEntityRepository.findOne({ where: { email: email } });
        if (!user) {
            throw new HttpException("user not found", HttpStatus.BAD_REQUEST)
        }
        return user;
    }

    async findUserByEmailAndId(email: string, id: number): Promise<UserEntity> {
        let user: UserEntity | null = await this._userEntityRepository.findOne({
            where: {
                email: email,
                id: id
            }
        });
        if (!user) {
            throw new HttpException("token not found", HttpStatus.BAD_REQUEST)
        }
        return user;
    }
}