import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createuser.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Users } from './model/user.model';
import { CreateWalletDto } from 'src/wallet/dto/createwallet.dto';

@Controller('users')
export class UsersController {
    constructor( private readonly usersService : UsersService) {}

    @ApiOperation({summary:'Створення користувача'})
    @ApiResponse({status:200, type: Users})
    @Post()
    async CreateUser(@Body() userDto: CreateUserDto, walletDto: CreateWalletDto){
      return this.usersService.createUser(userDto, walletDto);
    }

    @ApiOperation({summary:'Отримування всіх користувачі'})
    @ApiResponse({status:200, type: [Users]})
    @Get()
    async GetAllUsers(){
      return this.usersService.getAllusers();
    }

    @ApiOperation({summary:'Отримування користувача по email'})
    @ApiResponse({status:200, type: [Users]})
    @Get(':email')
    async GetUserPoEmail(@Param('email') email:string){
      return this.usersService.getusersPoEmail(email);
    }
}
