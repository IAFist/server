import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Typetransport } from './model/typetransport.model';
import { CreateTypetransportDto } from './dto/typetransport.dto';

@Injectable()
export class TypetransportService {
    constructor(@InjectRepository(Typetransport)
    private typetransportRepository: typeof Typetransport
  ){}
  
  async createTypeTs(dto: CreateTypetransportDto): Promise<Typetransport>{
    const typets = await this.typetransportRepository.create(dto);
    return typets;
  }
}
