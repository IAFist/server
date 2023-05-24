import { Injectable } from '@nestjs/common';
import { Coordinats } from './model/coordinats.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Sequelize } from 'sequelize-typescript';
import { CreateCoordinatsDto } from './dto/coordinats.dto';

@Injectable()
export class CoordinatsService {

    constructor(@InjectRepository(Coordinats)
    private coordinatsRepository: typeof Coordinats, private sequelize: Sequelize
  ){}
  
    async createCoordinats(dto: CreateCoordinatsDto): Promise<Coordinats>{
      const t = await this.sequelize.transaction();
      try{
        const coordinats = await this.coordinatsRepository.create(dto);
        await t.commit();
        return coordinats;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }
}
