import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transport } from './model/transport.model';
import { Stan } from 'src/stan/model/stan.model';
import { StanModule } from 'src/stan/stan.module';
import { Typetransport } from 'src/typetransport/model/typetransport.model';
import { TypetransportModule } from 'src/typetransport/typetransport.module';
import { Trip } from 'src/trip/model/trip.model';
import { TripModule } from 'src/trip/trip.module';

@Module({
  controllers: [TransportController],
  providers: [TransportService],
  imports:[
    SequelizeModule.forFeature([Transport, Stan, Typetransport, Trip]),
    StanModule,
    TypetransportModule,
    TripModule
  ]
})
export class TransportModule {}
