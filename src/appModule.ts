import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'Config/data-source';
import { MovieController } from './Controllers/MovieController';
import { UserController } from './Controllers/UserController';
import MovieDao from './Daos/MovieDao';
import UserDao from './Daos/UserDao';
import { Actor } from './Entities/Actor';
import { Director } from './Entities/Director';
import { Genre } from './Entities/Genre';
import { Movie } from './Entities/Movie';
import { Season } from './Entities/Season';
import { Tv } from './Entities/Tv';
import { User } from './Entities/User';
import { MovieService } from './Services/MovieService';
import { UserService } from './Services/UserService';
import { JwtStrategy } from './Strategy/JwtStrategy';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60s' },
  }),
  TypeOrmModule.forFeature([User,Actor,Director,Genre, Movie, Season, Tv]),
  TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [UserController, MovieController],
  providers: [UserService, UserDao, JwtStrategy, MovieService, MovieDao],
})
export class AppModule { }
