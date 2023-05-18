import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createuser.dto';

@Controller('/api')
export class UsersController {
    constructor( private readonly usersService : UsersService) {}

  @Post()
  async CreateUser(@Body() CreateUserDto: CreateUserDto){
    return this.usersService.createUser(CreateUserDto);
  }

  @Get()
  async GetAllUsers(){
    return this.usersService.findAll();
  }
}
