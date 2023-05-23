import { Module } from '@nestjs/common';
import { StanController } from './stan.controller';
import { StanService } from './stan.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stan } from './model/stan.model';
import { Transport } from 'src/transport/model/transport.model';

@Module({
  controllers: [StanController],
  providers: [StanService],
  imports:[
    SequelizeModule.forFeature([Stan,Transport])
  ],
  exports:[StanService]
})
export class StanModule {}
