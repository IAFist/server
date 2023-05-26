import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Typetransport } from './model/typetransport.model';
import { CreateTypetransportDto } from './dto/typetransport.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class TypetransportService {
    constructor(@InjectRepository(Typetransport)
    private typetransportRepository: typeof Typetransport, private sequelize: Sequelize
  ){}
  
  async createTypeTs(dto: CreateTypetransportDto): Promise<Typetransport>{
    const t = await this.sequelize.transaction();
      try{
        const typets = await this.typetransportRepository.create(dto);
        await t.commit();
        return typets;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }

  async getAlltypes(): Promise<Typetransport[]> {
    const typets = await this.typetransportRepository.findAll();
    return typets;
  }
}
