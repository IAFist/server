import { Injectable } from '@nestjs/common';
import { Wallet } from './model/wallet.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletDto } from './dto/createwallet.dto';

@Injectable()
export class WalletService {

  constructor(@InjectRepository(Wallet)
    private walletRepository: typeof Wallet,
  ){}
  
  async createWallet(dto: CreateWalletDto): Promise<Wallet>{
    const wallet = await this.walletRepository.create(dto);
    return wallet;
  }
}
