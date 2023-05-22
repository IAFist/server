import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from './model/wallet.model';
import { Users } from 'src/users/model/user.model';

@Module({
    providers: [WalletService],
    controllers: [WalletController],
    imports:[
      SequelizeModule.forFeature([Wallet, Users])
    ],
    exports:[WalletService]
  })
  export class WalletModule {}