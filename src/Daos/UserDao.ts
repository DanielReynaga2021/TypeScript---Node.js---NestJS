import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/User";
import { Repository } from "typeorm";

export default class UserDao {
    constructor(
        @InjectRepository(User)
        private _userEntityRepository: Repository<User>,
    ) { }

    async createUser(userEntity: User): Promise<User> {
        try{
            return await this._userEntityRepository.save(userEntity);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage, "duplicate email");
        }
        
    }

    async findUserByEmail(email: string): Promise<User> {
        let user: User | null = await this._userEntityRepository.findOne({ where: { email: email } });
        if (!user) {
            throw new HttpException("user not found", HttpStatus.BAD_REQUEST)
        }
        return user;
    }

    async findUserByEmailAndId(id: number, email: string, ): Promise<User> {
        let user: User  = await this._userEntityRepository.findOne({
            where: {
                email: email,
                id: id
            }
        });
        if (!user) {
            throw new HttpException("datebase not found", HttpStatus.BAD_REQUEST)
        }
        return user;
    }
}