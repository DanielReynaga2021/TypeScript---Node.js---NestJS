import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SeasonDao from 'src/Daos/SeasonDao';
import { Season } from 'src/Entities/Season';
import { SeasonService } from 'src/Services/SeasonService';
import { TvModule } from './TvModule';

@Module({
    imports: [TvModule
        ,TypeOrmModule.forFeature([Season])],
    providers: [SeasonService, SeasonDao],
    exports: [SeasonService],
})
export class SeasonModule {}
