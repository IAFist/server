import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Transport } from './model/transport.model';
import { CreateTransportDto } from './dto/transport.dto';
import { TransportService } from './transport.service';

@Controller('transport')
export class TransportController {
    constructor( private readonly transportService : TransportService) {}

    @ApiOperation({summary:'Створення запису транспорта'})
    @ApiResponse({status:200, type: Transport})
    @Post()
    async CreateTransport(@Body() transportDto: CreateTransportDto){
      return this.transportService.createTransport(transportDto);
    }

    @ApiOperation({summary:'Отримування списку транспорта'})
    @ApiResponse({status:200, type: [Transport]})
    @Get()
    async GetAllTransports(){
      return this.transportService.getAlltransports();
    }
}
