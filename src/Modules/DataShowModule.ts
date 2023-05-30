import { Module } from '@nestjs/common';
import { DataShowController } from 'src/Controllers/DataShowController';
import { DataShowService } from 'src/Services/DataShowService';
import { DataShowContext } from 'src/Strategy/DataShowStrategy/DataShowContext';
import { MovieModule } from './MovieModule';
import { EpisodeModule } from './EpisodeModule';
import { ActorModule } from './ActorModule';
import { GenreModule } from './GenreModule';
import { DirectorModule } from './DirectorModule';
import { TvModule } from './TvModule';
import { SeasonModule } from './SeasonModule';

@Module({
    imports: [ActorModule,MovieModule,EpisodeModule,GenreModule,DirectorModule, TvModule, SeasonModule],
    controllers: [DataShowController],
    providers: [DataShowService, DataShowContext],
})
export class DataShowModule {}
