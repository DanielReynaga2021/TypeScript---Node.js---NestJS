import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { AuthRequest } from "src/Models/Request/UserController/AuthRequest";
import { TokenRequest } from "src/Models/Request/UserController/TokenRequest";
import TokenUserResponse from "src/Models/Response/TokenUserResponse";
import { UserService } from "src/Services/UserService";

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Post('register')
  async registerUser(@Body() authRequest: AuthRequest): Promise<object> {
    return await this._userService.registerUser(authRequest);
  }

  @Post('login')
  async loginUser(@Body() authRequest: AuthRequest): Promise<TokenUserResponse> {
    return await this._userService.loginUser(authRequest);
  }

  @Post('refreshToken')
  async refreshToken(@Body() token: TokenRequest): Promise<TokenUserResponse> {
    return await this._userService.refreshToken(token.token);
  }
}