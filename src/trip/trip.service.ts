import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from './model/trip.model';
import { Sequelize } from 'sequelize-typescript';
import { CreateTripDto } from './dto/trip.dto';
import { Transport } from 'src/transport/model/transport.model';
import { Users } from 'src/users/model/user.model';
import { Place } from 'src/place/model/place.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class TripService {
    constructor(@InjectRepository(Trip)
    private tripRepository: typeof Trip, private sequelize: Sequelize, private filesService:FilesService
  ){}
  
  async createTrip(dto: CreateTripDto, foto: any): Promise<Trip>{
    const t = await this.sequelize.transaction();
    try{
      const transport = await Transport.findByPk( dto.transport_id,{transaction:t});
      if(!transport){
        throw new Error(`Айді транспорту ${dto.transport_id} не знайдено`);
      }
      const user = await Users.findByPk( dto.user_id,{transaction:t});
      if(!user){
        throw new Error(`Айді користувача ${dto.user_id} не знайдено`);
      }
      const place = await Place.findByPk( dto.place_id,{transaction:t});
      if(!place){
        throw new Error(`Айді місця ${dto.place_id} не знайдено`);
      }
      const fileName = await this.filesService.createFile(foto);
      const trip = await this.tripRepository.create(dto, {transaction:t, foto:fileName});
      await trip.$set('transport', transport, {transaction:t});
      await trip.$set('user', user, {transaction:t});
      await trip.$set('place', place, {transaction:t});
      await t.commit();
      return trip;
    }catch(error){
      await t.rollback();
      throw error;
    }
  }

  async getAlltrips(): Promise<Trip[]> {
    const trips = await this.tripRepository.findAll({include:{all:true}});
    return trips;
  }
}
