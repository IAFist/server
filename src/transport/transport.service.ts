import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transport } from './model/transport.model';
import { CreateTransportDto } from './dto/transport.dto';
import { Sequelize } from 'sequelize-typescript';
import { Stan } from 'src/stan/model/stan.model';
import { Typetransport } from 'src/typetransport/model/typetransport.model';

@Injectable()
export class TransportService {
    constructor(@InjectRepository(Transport)
    private transportRepository: typeof Transport, private sequelize: Sequelize
  ){}
  
  async createTransport(dto: CreateTransportDto): Promise<Transport>{
    const t = await this.sequelize.transaction();
    try{
      const stan = await Stan.findByPk( dto.stan_id,{transaction:t});
      if(!stan){
        throw new Error(`Айді стану ${dto.stan_id} не знайдено`);
      }
      const type = await Typetransport.findByPk( dto.type_id,{transaction:t});
      if(!type){
        throw new Error(`Айді типу транспорта ${dto.type_id} не знайдено`);
      }
      const transport = await this.transportRepository.create(dto, {transaction:t});
      await transport.$set('stan', stan, {transaction:t});
      await transport.$set('type', type, {transaction:t});
      await t.commit();
      return transport;
    }catch(error){
      await t.rollback();
      throw error;
    }
  }

  async getAlltransports(): Promise<Transport[]> {
    const transports = await this.transportRepository.findAll({include:{all:true}});
    return transports;
  }
}
