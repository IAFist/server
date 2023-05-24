import { Module } from '@nestjs/common';
import { TypetransportController } from './typetransport.controller';
import { TypetransportService } from './typetransport.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Typetransport } from './model/typetransport.model';

@Module({
  controllers: [TypetransportController],
  providers: [TypetransportService],
  imports:[
    SequelizeModule.forFeature([Typetransport]),
  ]
})
export class TypetransportModule {}
