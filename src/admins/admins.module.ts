import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admins } from './model/admins.model';

@Module({
  providers: [AdminsService],
  controllers: [AdminsController],
  imports:[
    SequelizeModule.forFeature([Admins]),
  ]
})
export class AdminsModule {}
