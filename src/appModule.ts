import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'Config/data-source';
import { DataShowController } from './Controllers/DataShowController';
import { EpisodeController } from './Controllers/EpisodeController';
import { MovieController } from './Controllers/MovieController';
import { UserController } from './Controllers/UserController';
import ActorDao from './Daos/ActorDao';
import DirectorDao from './Daos/DirectorDao';
import EpisodeDao from './Daos/EpisodeDao';
import GenreDao from './Daos/GenreDao';
import SeasonDao from './Daos/SeasonDao';
import MovieDao from './Daos/MovieDao';
import TvDao from './Daos/TvDao';
import UserDao from './Daos/UserDao';
import { Actor } from './Entities/Actor';
import { Director } from './Entities/Director';
import { Episode } from './Entities/Episode';
import { Genre } from './Entities/Genre';
import { Movie } from './Entities/Movie';
import { Season } from './Entities/Season';
import { Tv } from './Entities/Tv';
import { User } from './Entities/User';
import { ActorService } from './Services/ActorService';
import { DataShowService } from './Services/DataShowService';
import { EpisodeService } from './Services/EpisodeService';
import { GenreService } from './Services/GenreService';
import { MovieService } from './Services/MovieService';
import { UserService } from './Services/UserService';
import { DataShowContext } from './Strategy/DataShowStrategy/DataShowContext';
import { JwtStrategy } from './Strategy/JwtStrategy';
import { DirectorService } from './Services/DirectorService';
import { TvService } from './Services/TvService';
import { SeasonService } from './Services/SeasonService';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '3600s' },
  }),
  TypeOrmModule.forFeature([User, Actor, Director, Genre, Movie, Season, Tv, Episode]),
  TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [UserController, MovieController, EpisodeController, DataShowController],
  providers: [UserService, UserDao, JwtStrategy, MovieService, MovieDao, EpisodeService, EpisodeDao, DataShowService, ActorDao, ActorService, DataShowContext, GenreService, GenreDao, DirectorDao, SeasonDao, TvDao, DirectorService, SeasonService, TvService],
})
export class AppModule { }
