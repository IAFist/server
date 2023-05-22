import { Injectable } from '@nestjs/common';
import { Users } from './model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createuser.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { CreateWalletDto } from 'src/wallet/dto/createwallet.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
    private usersRepository: typeof Users, private walletRepository: WalletService
  ){}
  
  async createUser(dto: CreateUserDto, walletDto: CreateWalletDto): Promise<Users>{
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
