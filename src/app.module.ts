import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ukrauto',
      port: 3306,
      username: 'root',
      password: 'De#3003#Metz',
      database: 'ukrauto',
      entities: ['dist/**/*.entity{.ts,.js}'],
      dropSchema: false,
      synchronize: true,
      migrationsRun: false,
      logging: true,
      migrations: ['dist/modules/**/db/migrations/*{.ts,.js}'],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
