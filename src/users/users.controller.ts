import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createuser.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Users } from './model/user.model';

@Controller('users')
export class UsersController {
    constructor( private readonly usersService : UsersService) {}

    @ApiOperation({summary:'Створення користувача'})
    @ApiResponse({status:200, type: Users})
    @Post()
    async CreateUser(@Body() userDto: CreateUserDto){
      return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary:'Отримування всіх користувачі'})
    @ApiResponse({status:200, type: [Users]})
    @Get()
    async GetAllUsers(){
      return this.usersService.getAllusers();
    }
}
