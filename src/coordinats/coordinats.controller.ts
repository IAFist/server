import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoordinatsService } from './coordinats.service';
import { Coordinats } from './model/coordinats.model';
import { CreateCoordinatsDto } from './dto/coordinats.dto';

@Controller('coordinats')
export class CoordinatsController {
    constructor( private readonly coordinatsService : CoordinatsService) {}

    @ApiOperation({summary:'Створення координат місця'})
    @ApiResponse({status:200, type: Coordinats})
    @Post()
    async CreateCoordinats(@Body() coordinatsDto: CreateCoordinatsDto){
      return this.coordinatsService.createCoordinats(coordinatsDto);
    }
}
