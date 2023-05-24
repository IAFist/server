import { Module } from '@nestjs/common';  
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';
import { Users } from './users/model/user.model';
import { Wallet } from './wallet/model/wallet.model';
import { CoordinatsModule } from './coordinats/coordinats.module';
import { Coordinats } from './coordinats/model/coordinats.model';
import { PlaceModule } from './place/place.module';
import { Place } from './place/model/place.model';
import { TraficModule } from './trafic/trafic.module';
import { Trafic } from './trafic/model/trafic.model';
import { TypetransportModule } from './typetransport/typetransport.module';
import { Typetransport } from './typetransport/model/typetransport.model';
import { StanModule } from './stan/stan.module';
import { Stan } from './stan/model/stan.model';
import { TransportModule } from './transport/transport.module';
import { Transport } from './transport/model/transport.model';

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
      models: [Users, Wallet, Coordinats, Place, Trafic, Typetransport,Transport, Stan],
      autoLoadModels:true
    }),
    UsersModule,
    WalletModule,
    CoordinatsModule,
    PlaceModule,
    TraficModule,
    TypetransportModule,
    StanModule,
    TransportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
