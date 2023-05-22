import { Module } from '@nestjs/common';
import { CoordinatsController } from './coordinats.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoordinatsService } from './coordinats.service';
import { Coordinats } from './model/coordinats.model';
import { Place } from 'src/place/model/place.model';

@Module({
  controllers: [CoordinatsController],
  providers: [CoordinatsService],
  imports:[
    SequelizeModule.forFeature([Coordinats, Place])
  ],
  exports:[CoordinatsService]
})
export class CoordinatsModule {}
