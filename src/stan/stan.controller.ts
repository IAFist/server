import { Body, Controller, Get, Post } from '@nestjs/common';
import { StanService } from './stan.service';
import { Stan } from './model/stan.model';
import { CreateStanDto } from './dto/stan.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('stan')
export class StanController {
    constructor( private readonly stanService : StanService) {}

    @ApiOperation({summary:'Створення гаманця'})
    @ApiResponse({status:200, type: Stan})
    @Post()
    async CreateStan(@Body() stanDto: CreateStanDto){
      return this.stanService.createStan(stanDto);
    }
}
