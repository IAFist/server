import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/createwallet.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Wallet } from './model/wallet.model';

@Controller('wallet')
export class WalletController {
    constructor( private readonly walletService : WalletService) {}

    @ApiOperation({summary:'Створення гаманця'})
    @ApiResponse({status:200, type: Wallet})
    @Post()
    async CreateWallet(@Body() walletDto: CreateWalletDto){
      return this.walletService.createWallet(walletDto);
    }
}
