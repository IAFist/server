import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admins } from './model/admins.model';
import { Sequelize } from 'sequelize-typescript';
import { CreateAdminsDto } from './dto/admins.dto';

@Injectable()
export class AdminsService {
    constructor(@InjectRepository(Admins)
    private adminsRepository: typeof Admins, private sequelize: Sequelize
  ){}

  async createAdmin(dto: CreateAdminsDto): Promise<Admins>{
    const t = await this.sequelize.transaction();
      try{
        const admin = await this.adminsRepository.create(dto);
        await t.commit();
        return admin;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }
}
