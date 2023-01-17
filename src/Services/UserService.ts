import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import UserDao from "src/Daos/UserDao";
import { UserEntity } from "src/Entities/UserEntity";
import { AuthRequest } from "src/Models/Request/UserController/AuthRequest";
import TokenUserResponse from "src/Models/Response/TokenUserResponse";

@Injectable()
export class UserService {
  constructor(
    private readonly _userDao: UserDao,
    private readonly _jwtService: JwtService
  ) { }

  public async registerUser(authRequest: AuthRequest): Promise<object> {
    let { email, password } = authRequest;
    password = await hash(password, 10);
    let userEntity: UserEntity = this.buildUserEntity(email, password);
    await this._userDao.createUser(userEntity);
    return { result: "ok" };
  }

  public async loginUser(authRequest: AuthRequest): Promise<TokenUserResponse> {
    let user: UserEntity = await this._userDao.findUserByEmail(authRequest.email);
    let isPassword: Boolean = await compare(authRequest.password, user.password);
    if (!isPassword) {
      throw new HttpException("incorrect password", HttpStatus.BAD_REQUEST);
    }
    let token: string = this.createToken(user.id, user.email)
    return new TokenUserResponse(token);
  }

  public async refreshToken(token: string): Promise<TokenUserResponse> {
    let user = this._jwtService.decode(token);
    if (!user.hasOwnProperty("id") && !user.hasOwnProperty("email")) {
      throw new HttpException("token not found", HttpStatus.BAD_REQUEST);
    }
    let userEntity: UserEntity = await this._userDao.findUserByEmailAndId(user["id"], user["email"]);
    let newtoken: string = this.createToken(userEntity.id, userEntity.email)
    return new TokenUserResponse(newtoken);
  }

  public createToken(id: number, email: string): string {
    let payload = { id: id, email: email };
    let token: string = this._jwtService.sign(payload);
    return token;
  }

  private buildUserEntity(email: string, password: string): UserEntity {
    let userEntity: UserEntity = new UserEntity()
    userEntity.email = email;
    userEntity.password = password;
    return userEntity;
  }
}
