import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TripService } from './trip.service';
import { Trip } from './model/trip.model';
import { CreateTripDto } from './dto/trip.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('trip')
export class TripController {
    constructor( private readonly tripService : TripService) {}

    @ApiOperation({summary:'Створення подорожі'})
    @ApiResponse({status:200, type: Trip})
    @Post()
    @UseInterceptors(FileInterceptor('foto'))
    async CreateTrip(@Body() tripDto: CreateTripDto, @UploadedFile() foto){
      return this.tripService.createTrip(tripDto, foto);
    }

    @ApiOperation({summary:'Отримування всіх подорожів'})
    @ApiResponse({status:200, type: [Trip]})
    @Get()
    async GetAllTrips(){
      return this.tripService.getAlltrips();
    }
}
