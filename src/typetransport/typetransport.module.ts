import { Module } from '@nestjs/common';
import { TypetransportController } from './typetransport.controller';
import { TypetransportService } from './typetransport.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Typetransport } from './model/typetransport.model';
import { Trafic } from 'src/trafic/model/trafic.model';
import { TraficModule } from 'src/trafic/trafic.module';
import { Transport } from 'src/transport/model/transport.model';
import { TransportModule } from 'src/transport/transport.module';

@Module({
  controllers: [TypetransportController],
  providers: [TypetransportService],
  imports:[
    SequelizeModule.forFeature([Typetransport, Trafic]),
    TraficModule,
  ]
})
export class TypetransportModule {}
