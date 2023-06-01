import { Body, Controller, Get, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Transport } from './model/transport.model';
import { CreateTransportDto } from './dto/transport.dto';
import { TransportService } from './transport.service';
import { UpdateTransportDto } from './dto/updatetransport.dto';

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

    @ApiOperation({summary:'Отримування транспорта по id'})
    @ApiResponse({status:200, type: [Transport]})
    @Get(':id')
    async getTransportPoId(@Param('id') id:number){
      return this.transportService.getTransportPoId(id);
    }

    @ApiOperation({summary:'Оновлення транспорта'})
    @ApiResponse({status:200, type: [Transport]})
    @Put(':id')
    async updateTransport(@Param('id') id: number , @Body() updateTransportDto: UpdateTransportDto){
      return this.transportService.updateTransport(id, updateTransportDto);
    }

    @ApiOperation({summary:'Видалення міст'})
    @Delete(':id')
    async DeletePlaces(@Param('id') id: number){
      return this.transportService.deletetransport(id);
    }
}
