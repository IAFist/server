import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stan } from './model/stan.model';
import { CreateStanDto } from './dto/stan.dto';

@Injectable()
export class StanService {
    constructor(@InjectRepository(Stan)
    private stanRepository: typeof Stan,
  ){}
  
  async createStan(dto: CreateStanDto): Promise<Stan>{
    const stan = await this.stanRepository.create(dto);
    return stan;
  }
}
