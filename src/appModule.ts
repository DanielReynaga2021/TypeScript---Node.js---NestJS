import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'Config/data-source';
import { AppController } from './Controllers/app.controller';
import { TestController } from './Controllers/test';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
