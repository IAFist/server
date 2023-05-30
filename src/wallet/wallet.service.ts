import { Injectable } from '@nestjs/common';
import { Wallet } from './model/wallet.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletDto } from './dto/createwallet.dto';
import { Sequelize } from 'sequelize-typescript';
import { UpdateWalletDto } from './dto/updatewallet.dto';

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
  async getwallet(id:number): Promise<Wallet>{
    await this.walletRepository.findOne({where:{index_wallet:id}});
    const wallet = await this.walletRepository.findOne({
      where: { index_wallet: id }
    });
    return wallet;
  }
  async updateWallet(id: number, updateWalletDto: UpdateWalletDto): Promise<Wallet> {
    await this.walletRepository.update({
        balance:updateWalletDto.balance
      },{
        where:{index_wallet:id}
    });
    const updatedWallet = await this.walletRepository.findOne({
      where: { index_wallet: id }
    });
    return updatedWallet;
  }
}
