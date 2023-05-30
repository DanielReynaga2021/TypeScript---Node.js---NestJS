import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ActorDao from 'src/Daos/ActorDao';
import { Actor } from 'src/Entities/Actor';
import { ActorService } from 'src/Services/ActorService';

@Module({
    imports: [TypeOrmModule.forFeature([Actor])],
    providers: [ActorService, ActorDao],
    exports: [ActorService],
})
export class ActorModule {}
