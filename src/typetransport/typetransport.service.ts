import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Typetransport } from './model/typetransport.model';
import { TraficService } from 'src/trafic/trafic.service';
import { CreateTypetransportDto } from './dto/typetransport.dto';
import { CreateTraficDto } from 'src/trafic/dto/trafic.dto';

@Injectable()
export class TypetransportService {
    constructor(@InjectRepository(Typetransport)
    private typetransportRepository: typeof Typetransport, private traficRepository: TraficService
  ){}
  
  async createTypeTs(dto: CreateTypetransportDto, traficDto: CreateTraficDto): Promise<Typetransport>{
    const typets = await this.typetransportRepository.create(dto);
    const trafic = await this.traficRepository.createTrafic(traficDto);
    await typets.$set('trafic',[trafic.index_trafic]);
    return typets;
  }
}
