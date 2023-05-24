import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './model/place.model';
import { Coordinats } from 'src/coordinats/model/coordinats.model';
import { CoordinatsModule } from 'src/coordinats/coordinats.module';
import { Trip } from 'src/trip/model/trip.model';
import { TripModule } from 'src/trip/trip.module';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService],
  imports:[
    SequelizeModule.forFeature([Place, Coordinats, Trip]),
    CoordinatsModule,
    TripModule
  ]
})
export class PlaceModule {}
