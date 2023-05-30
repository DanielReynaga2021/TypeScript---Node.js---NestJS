import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import EpisodeDao from 'src/Daos/EpisodeDao';
import { Episode } from 'src/Entities/Episode';
import { EpisodeService } from 'src/Services/EpisodeService';
import { SeasonModule } from './SeasonModule';
import { EpisodeController } from 'src/Controllers/EpisodeController';

@Module({
    imports: [SeasonModule,
        TypeOrmModule.forFeature([Episode])],
    controllers: [EpisodeController],
    providers: [EpisodeService, EpisodeDao],
    exports: [EpisodeService],
})
export class EpisodeModule {}
