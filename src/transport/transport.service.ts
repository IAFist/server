import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transport } from './model/transport.model';
import { StanService } from 'src/stan/stan.service';
import { CreateTransportDto } from './dto/transport.dto';

@Injectable()
export class TransportService {
    constructor(@InjectRepository(Transport)
    private transportRepository: typeof Transport
  ){}
  
  async createTransport(dto: CreateTransportDto): Promise<Transport>{
    const transport = await this.transportRepository.create(dto);
    return transport;
  }

  async getAlltransports(): Promise<Transport[]> {
    const transports = await this.transportRepository.findAll({include:{all:true}});
    return transports;
  }
}
