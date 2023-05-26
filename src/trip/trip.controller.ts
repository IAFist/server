import { Body, Controller, Get, Post, UploadedFile } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TripService } from './trip.service';
import { Trip } from './model/trip.model';
import { CreateTripDto } from './dto/trip.dto';

@Controller('trip')
export class TripController {
    constructor( private readonly tripService : TripService) {}

    @ApiOperation({summary:'Створення подорожі'})
    @ApiResponse({status:200, type: Trip})
    @Post()
    async CreateTrip(@Body() tripDto: CreateTripDto, @UploadedFile() images){
      return this.tripService.createTrip(tripDto, images);
    }

    @ApiOperation({summary:'Отримування всіх подорожів'})
    @ApiResponse({status:200, type: [Trip]})
    @Get()
    async GetAllTrips(){
      return this.tripService.getAlltrips();
    }
}
