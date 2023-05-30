import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DirectorDao from 'src/Daos/DirectorDao';
import { Director } from 'src/Entities/Director';
import { DirectorService } from 'src/Services/DirectorService';

@Module({
    imports: [TypeOrmModule.forFeature([Director])],
    providers: [DirectorService, DirectorDao],
    exports: [DirectorService],
})
export class DirectorModule {}
