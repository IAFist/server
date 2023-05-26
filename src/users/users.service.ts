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
  
  async createUser(dto: CreateUserDto, walletDto: CreateWalletDto): Promise<Users>{
    // const t = await this.sequelize.transaction();
    //   try{
    //     const user = await this.usersRepository.create(dto);
    //     const wallet = await this.walletRepository.createWallet(walletDto);
    //     await user.$set('wallet',[wallet.index_wallet]);
    //     await t.commit();
    //     return user;
    //   }catch(error){
    //     await t.rollback();
    //     throw error;
    //   }
    const user = await this.usersRepository.create(dto);
        const wallet = await this.walletRepository.createWallet(walletDto);
        await user.$set('wallet',[wallet.index_wallet]);
        return user;
  }

  async getAllusers(): Promise<Users[]> {
    const users = await this.usersRepository.findAll({include:{all:true}});
    return users;
  }
}
