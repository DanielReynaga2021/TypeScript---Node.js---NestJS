import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from 'src/Controllers/MovieController';
import MovieDao from 'src/Daos/MovieDao';
import { Movie } from 'src/Entities/Movie';
import { MovieService } from 'src/Services/MovieService';
import { DirectorModule } from './DirectorModule';
import { DirectorService } from 'src/Services/DirectorService';

@Module({
    imports: [DirectorModule,
        TypeOrmModule.forFeature([Movie])],
    controllers: [MovieController],
    providers: [MovieService, MovieDao],
    exports: [MovieService]
})
export class MovieModule {}
