import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlaceService } from './place.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Place } from './model/place.model';
import { CreatePlaceDto } from './dto/place.dto';
import { CreateCoordinatsDto } from 'src/coordinats/dto/coordinats.dto';

@Controller('place')
export class PlaceController {
    constructor( private readonly placeService : PlaceService) {}

    @ApiOperation({summary:'Створення міста'})
    @ApiResponse({status:200, type: Place})
    @Post()
    async CreatePlace(@Body() placerDto: CreatePlaceDto, coordinatsDto: CreateCoordinatsDto){
      return this.placeService.createPlace(placerDto, coordinatsDto);
    }

    @ApiOperation({summary:'Отримування всіх міст'})
    @ApiResponse({status:200, type: [Place]})
    @Get()
    async GetAllPlaces(){
      return this.placeService.getAllplaces();
    }
}
