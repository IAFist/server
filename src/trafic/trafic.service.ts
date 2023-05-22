import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trafic } from './model/trafic.model';
import { CreateTraficDto } from './dto/trafic.dto';

@Injectable()
export class TraficService {
    constructor(@InjectRepository(Trafic)
    private traficRepository: typeof Trafic,
  ){}
  
  async createTrafic(dto: CreateTraficDto): Promise<Trafic>{
    const trafic = await this.traficRepository.create(dto);
    return trafic;
  }
}
