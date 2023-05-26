import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './model/place.model';
import { CoordinatsService } from 'src/coordinats/coordinats.service';
import { CreatePlaceDto } from './dto/place.dto';
import { CreateCoordinatsDto } from 'src/coordinats/dto/coordinats.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(Place)
    private placeRepository: typeof Place, private coordinatsRepository: CoordinatsService, private sequelize: Sequelize
  ){}
  
  async createPlace(dto: CreatePlaceDto, coordinatstDto: CreateCoordinatsDto): Promise<Place>{
    const t = await this.sequelize.transaction();
      try{
        const place = await this.placeRepository.create(dto);
        const coordinats = await this.coordinatsRepository.createCoordinats(coordinatstDto);
        await place.$set('coordinats',[coordinats.coordinats_id]);
        await t.commit();
        return place;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }

  async getAllplaces(): Promise<Place[]> {
    const place = await this.placeRepository.findAll({include:{all:true}});
    return place;
  }

  async deleteplace(id:number): Promise<Place>{
    await this.placeRepository.destroy({where:{index_place:id}});
    const place = await this.placeRepository.findOne({
      where: { index_place: id }
    });
    return place;
  }
}
