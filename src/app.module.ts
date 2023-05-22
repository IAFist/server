import { Module } from '@nestjs/common';  
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';
import { Users } from './users/model/user.model';
import { Wallet } from './wallet/model/wallet.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Users, Wallet],
      autoLoadModels:true
    }),
    UsersModule,
    WalletModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
