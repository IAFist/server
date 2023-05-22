import { Injectable } from '@nestjs/common';
import { Coordinats } from './model/coordinats.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoordinatsDto } from './dto/coordinats.dto';

@Injectable()
export class CoordinatsService {

    constructor(@InjectRepository(Coordinats)
    private coordinatsRepository: typeof Coordinats,
  ){}
  
    async createCoordinats(dto: CreateCoordinatsDto): Promise<Coordinats>{
    const coordinats = await this.coordinatsRepository.create(dto);
    return coordinats;
  }
}
