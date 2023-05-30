import { Body, Controller, Post} from '@nestjs/common';
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
}
