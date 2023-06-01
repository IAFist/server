import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminsService } from './admins.service';
import { Admins } from './model/admins.model';
import { CreateAdminsDto } from './dto/admins.dto';

@Controller('admins')
export class AdminsController {
    constructor( private readonly adminsService : AdminsService) {}

    @ApiOperation({summary:'Створення адміністратора'})
    @ApiResponse({status:200, type: Admins})
    @Post()
    async CreateAdmin(@Body() adminDto: CreateAdminsDto){
      return this.adminsService.createAdmin(adminDto);
    }

    @ApiOperation({summary:'Отримування користувача по email'})
    @ApiResponse({status:200, type: [Admins]})
    @Get('/:email/:password')
    async GetAdminPoEmail(@Param('email') email:string,@Param('password') password:string): Promise<boolean>{
      return this.adminsService.getadminPoEmail(email, password);
    }
}
