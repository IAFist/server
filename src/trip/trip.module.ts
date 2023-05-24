import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transport } from 'src/transport/model/transport.model';
import { Place } from 'src/place/model/place.model';
import { TransportModule } from 'src/transport/transport.module';
import { PlaceModule } from 'src/place/place.module';
import { Users } from 'src/users/model/user.model';
import { UsersModule } from 'src/users/users.module';
import { Trip } from './model/trip.model';

@Module({
  controllers: [TripController],
  providers: [TripService],
  imports:[
    SequelizeModule.forFeature([Trip, Transport, Place, Users]),
    TransportModule,
    PlaceModule,
    UsersModule
  ]
})
export class TripModule {}
