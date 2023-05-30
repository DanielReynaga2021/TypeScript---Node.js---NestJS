import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TvDao from 'src/Daos/TvDao';
import { Tv } from 'src/Entities/Tv';
import { TvService } from 'src/Services/TvService';
import { DirectorModule } from './DirectorModule';

@Module({
    imports: [DirectorModule,TypeOrmModule.forFeature([Tv])],
    providers: [TvService, TvDao],
    exports: [TvService],
})
export class TvModule {}
