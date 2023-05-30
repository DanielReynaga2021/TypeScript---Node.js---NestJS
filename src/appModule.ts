import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'Config/data-source';
import { ActorModule } from './Modules/ActorModule';
import { DataShowModule } from './Modules/DataShowModule';
import { EpisodeModule } from './Modules/EpisodeModule';
import { GenreModule } from './Modules/GenreModule';
import { MovieModule } from './Modules/MovieModule';
import { UserModule } from './Modules/UserModule';
import { SeasonModule } from './Modules/SeasonModule';
import { TvModule } from './Modules/TvModule';

@Module({
  imports: [ActorModule, DataShowModule, EpisodeModule, GenreModule, MovieModule, UserModule, SeasonModule, TvModule,
    ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot(dataSourceOptions)],
})
export class AppModule { }
