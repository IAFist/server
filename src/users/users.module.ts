import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './model/user.model';
import { Wallet } from 'src/wallet/model/wallet.model';
import { WalletModule } from 'src/wallet/wallet.module';
import { Trip } from 'src/trip/model/trip.model';
import { TripModule } from 'src/trip/trip.module';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports:[
      SequelizeModule.forFeature([Users, Wallet, Trip]),
      WalletModule,
      TripModule
    ]
  })
  export class UsersModule {}