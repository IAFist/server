import { Module } from '@nestjs/common';
import { StanController } from './stan.controller';
import { StanService } from './stan.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stan } from './model/stan.model';

@Module({
  controllers: [StanController],
  providers: [StanService],
  imports:[
    SequelizeModule.forFeature([Stan])
  ],
  exports:[StanService]
})
export class StanModule {}
