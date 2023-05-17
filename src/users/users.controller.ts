import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api')
export class UsersController {
    constructor( private readonly usersService : UsersService) {}
  @Get()
  async GetAllUsers(){
    
    return this.usersService.findAll();
  }
}
