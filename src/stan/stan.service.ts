import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stan } from './model/stan.model';
import { CreateStanDto } from './dto/stan.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class StanService {
    constructor(@InjectRepository(Stan)
    private stanRepository: typeof Stan, private sequelize: Sequelize
  ){}
  
  async createStan(dto: CreateStanDto): Promise<Stan>{
    const t = await this.sequelize.transaction();
      try{
        const stan = await this.stanRepository.create(dto);
        await t.commit();
        return stan;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }
}
