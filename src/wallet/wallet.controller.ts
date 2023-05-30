import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/createwallet.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Wallet } from './model/wallet.model';
import { UpdateWalletDto } from './dto/updatewallet.dto';

@Controller('wallet')
export class WalletController {
    constructor( private readonly walletService : WalletService) {}

    @ApiOperation({summary:'Створення гаманця'})
    @ApiResponse({status:200, type: Wallet})
    @Post()
    async CreateWallet(@Body() walletDto: CreateWalletDto){
      return this.walletService.createWallet(walletDto);
    }    

    @ApiOperation({summary:'Отримання гаманця'})
    @ApiResponse({status:200, type: Wallet})
    @Get(':id')
    async GetWallet(@Param('id') id:number){
      return this.walletService.getwallet(id);
    }
    
    @ApiOperation({summary:'Оновлення гаманця'})
    @ApiResponse({status:200, type: [Wallet]})
    @Put(':id')
    async updateWallet(@Param('id') id: number , @Body() updateWallettDto: UpdateWalletDto){
      return this.walletService.updateWallet(id, updateWallettDto);
    }
}
