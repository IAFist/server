import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TypetransportService } from './typetransport.service';
import { CreateTypetransportDto } from './dto/typetransport.dto';
import { Typetransport } from './model/typetransport.model';


@Controller('typetransport')
export class TypetransportController {
    constructor( private readonly typetransportService : TypetransportService) {}

    @ApiOperation({summary:'Створення типу транспорта'})
    @ApiResponse({status:200, type: Typetransport})
    @Post()
    async CreateTypeTs(@Body() typetransportDto: CreateTypetransportDto){
      return this.typetransportService.createTypeTs(typetransportDto);
    }

    @ApiOperation({summary:'Отримування списку типів'})
    @ApiResponse({status:200, type: [Typetransport]})
    @Get()
    async GetAllTypes(){
      return this.typetransportService.getAlltypes();
    }
}
