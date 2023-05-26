import { Injectable } from '@nestjs/common';
import { Wallet } from './model/wallet.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletDto } from './dto/createwallet.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class WalletService {

  constructor(@InjectRepository(Wallet)
    private walletRepository: typeof Wallet, private sequelize: Sequelize
  ){}
  
  async createWallet(dto: CreateWalletDto): Promise<Wallet>{
    const t = await this.sequelize.transaction();
      try{
        const wallet = await this.walletRepository.create(dto);
        await t.commit();
        return wallet;
      }catch(error){
        await t.rollback();
        throw error;
      }
  }
}
