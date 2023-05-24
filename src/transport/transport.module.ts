import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transport } from './model/transport.model';
import { Stan } from 'src/stan/model/stan.model';
import { StanModule } from 'src/stan/stan.module';
import { Typetransport } from 'src/typetransport/model/typetransport.model';
import { TypetransportModule } from 'src/typetransport/typetransport.module';

@Module({
  controllers: [TransportController],
  providers: [TransportService],
  imports:[
    SequelizeModule.forFeature([Transport, Stan, Typetransport]),
    StanModule,
    TypetransportModule
  ]
})
export class TransportModule {}
