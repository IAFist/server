import { Injectable } from '@nestjs/common';
import { Users } from './model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createuser.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { CreateWalletDto } from 'src/wallet/dto/createwallet.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
    private usersRepository: typeof Users, private walletRepository: WalletService, private sequelize: Sequelize
  ){}
  
  async findUserByEmail(email: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  async createUser(dto: CreateUserDto, walletDto: CreateWalletDto): Promise<Users>{
    const t = await this.sequelize.transaction();
      try{
        const user = await this.usersRepository.create(dto);
        const wallet = await this.walletRepository.createWallet(walletDto);
        await user.$set('wallet',[wallet.index_wallet]);
        await t.commit();
        return user;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }

  async getAllusers(): Promise<Users[]> {
    const users = await this.usersRepository.findAll({include:{all:true}});
    return users;
  }

  async getusersPoEmail(email:string): Promise<boolean> {
    const count = await this.usersRepository.count({
      where: {
        email,
      },
    });
    return count > 0;
  }

  async getusersPoEmail2(email2:string): Promise<Users> {
    await this.usersRepository.findOne({where:{email:email2}});
    const user = await this.usersRepository.findOne({
      where: {email:email2}
    });
    return user;
  }
}
