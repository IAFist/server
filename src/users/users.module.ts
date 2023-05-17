import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController],
  })
  export class UsersModule {}