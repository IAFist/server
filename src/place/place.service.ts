import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './model/place.model';
import { CoordinatsService } from 'src/coordinats/coordinats.service';
import { CreatePlaceDto } from './dto/place.dto';
import { CreateCoordinatsDto } from 'src/coordinats/dto/coordinats.dto';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(Place)
    private placeRepository: typeof Place, private coordinatsRepository: CoordinatsService
  ){}
  
  async createPlace(dto: CreatePlaceDto, coordinatstDto: CreateCoordinatsDto): Promise<Place>{
    const place = await this.placeRepository.create(dto);
    const coordinats = await this.coordinatsRepository.createCoordinats(coordinatstDto);
    await place.$set('coordinats',[coordinats.coordinats_id]);
    return place;
  }

  async getAllplaces(): Promise<Place[]> {
    const place = await this.placeRepository.findAll({include:{all:true}});
    return place;
  }
}
