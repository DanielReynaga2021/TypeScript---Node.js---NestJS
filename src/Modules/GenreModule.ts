import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import GenreDao from 'src/Daos/GenreDao';
import { Genre } from 'src/Entities/Genre';
import { GenreService } from 'src/Services/GenreService';

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    providers: [GenreService, GenreDao],
    exports: [GenreService],
})
export class GenreModule {}
