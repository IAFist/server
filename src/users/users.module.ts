import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './model/user.model';
import { Wallet } from 'src/wallet/model/wallet.model';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports:[
      SequelizeModule.forFeature([Users, Wallet])
    ]
  })
  export class UsersModule {}