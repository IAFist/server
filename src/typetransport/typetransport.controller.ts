import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TypetransportService } from './typetransport.service';
import { CreateTypetransportDto } from './dto/typetransport.dto';
import { CreateTraficDto } from 'src/trafic/dto/trafic.dto';
import { Typetransport } from './model/typetransport.model';



@Controller('typetransport')
export class TypetransportController {
    constructor( private readonly typetransportService : TypetransportService) {}

    @ApiOperation({summary:'Створення типу транспорта'})
    @ApiResponse({status:200, type: Typetransport})
    @Post()
    async CreateTypeTs(@Body() typetransportDto: CreateTypetransportDto, traficDto: CreateTraficDto){
      return this.typetransportService.createTypeTs(typetransportDto, traficDto);
    }
}
