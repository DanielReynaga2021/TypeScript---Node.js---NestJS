import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'Config/data-source';
import { MovieController } from './Controllers/MovieController';
import { UserController } from './Controllers/UserController';
import UserDao from './Daos/UserDao';
import { UserEntity } from './Entities/UserEntity';
import { MovieService } from './Services/MovieService';
import { UserService } from './Services/UserService';
import { JwtStrategy } from './Strategy/JwtStrategy';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60s' },
  }),
  TypeOrmModule.forFeature([UserEntity]),
  TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [UserController, MovieController],
  providers: [UserService, UserDao, JwtStrategy, MovieService],
})
export class AppModule { }
