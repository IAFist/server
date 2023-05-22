import { Module } from '@nestjs/common';
import { TraficController } from './trafic.controller';
import { TraficService } from './trafic.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trafic } from './model/trafic.model';

@Module({
  controllers: [TraficController],
  providers: [TraficService],
  imports:[
    SequelizeModule.forFeature([Trafic])
  ],
  exports:[TraficService]
})
export class TraficModule {}
