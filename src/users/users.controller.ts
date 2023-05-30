import { Body, Controller, Get, Param, Post, NotFoundException} from '@nestjs/common';
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
      const {email} = userDto;
      const user = await this.usersService.findUserByEmail(email);
      if (user) {
          throw new NotFoundException('Пользователь с таким email уже существует');
      }
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
    @Get('/email/:email')
    async GetUserPoEmail(@Param('email') email:string): Promise<boolean>{
      return this.usersService.getusersPoEmail(email);
    }

    @ApiOperation({summary:'Отримування користувача по email'})
    @ApiResponse({status:200, type: [Users]})
    @Get('/email2/:email')
    async GetUserPoEmail2(@Param('email') email2:string){
      return this.usersService.getusersPoEmail2(email2);
    }
}
