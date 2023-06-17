import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admins } from './model/admins.model';
import { Sequelize } from 'sequelize-typescript';
import { CreateAdminsDto } from './dto/admins.dto';
import { PasswordService } from './password.service';

@Injectable()
export class AdminsService {
    constructor(@InjectRepository(Admins)
    private adminsRepository: typeof Admins, private sequelize: Sequelize, private passwordService: PasswordService
  ){}

  async createAdmin(dto: CreateAdminsDto): Promise<Admins>{
    const t = await this.sequelize.transaction();
      try{
        const {email, password} = dto;
        const hashedpassword  = await this.passwordService.hashPassword(password);
        const admin = await this.adminsRepository.create({email, password:hashedpassword});
        await t.commit();
        return admin;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }

  async getadminPoEmail(email:string, password:string): Promise<boolean> {
    const user = await this.adminsRepository.findOne({ where: { email } });
    if (user && await this.passwordService.comparePasswords(password, user.password)) {
      return true; // Пароли совпадают
    }
    return false;
    // const count = await this.adminsRepository.count({
    //   where: {
    //     email,
    //     password
    //   },
    // });
    // return count > 0;
  }
}
