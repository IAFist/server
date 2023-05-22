import { Body, Controller, Get, Post } from '@nestjs/common';
import { TraficService } from './trafic.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Trafic } from './model/trafic.model';
import { CreateTraficDto } from './dto/trafic.dto';

@Controller('trafic')
export class TraficController {
    constructor( private readonly traficService : TraficService) {}

    @ApiOperation({summary:'Створення гаманця'})
    @ApiResponse({status:200, type: Trafic})
    @Post()
    async CreateTrafic(@Body() traficDto: CreateTraficDto){
      return this.traficService.createTrafic(traficDto);
    }
}
