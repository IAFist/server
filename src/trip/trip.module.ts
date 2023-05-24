import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transport } from 'src/transport/model/transport.model';
import { Place } from 'src/place/model/place.model';
import { TransportModule } from 'src/transport/transport.module';
import { PlaceModule } from 'src/place/place.module';

@Module({
  controllers: [TripController],
  providers: [TripService],
  imports:[
    SequelizeModule.forFeature([Transport, Place]),
    TransportModule,
    PlaceModule
  ]
})
export class TripModule {}
