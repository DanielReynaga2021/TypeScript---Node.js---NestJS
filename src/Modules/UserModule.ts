import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserController } from 'src/Controllers/UserController';
import UserDao from 'src/Daos/UserDao';
import { User } from 'src/Entities/User';
import { UserService } from 'src/Services/UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/Strategy/JwtStrategy';


@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' },
      }),],
    controllers: [UserController],
    providers: [UserService, UserDao, JwtService, JwtStrategy],
    exports: [UserService]
})
export class UserModule { }
