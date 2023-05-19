import { Injectable } from '@nestjs/common';
import { Users } from './model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createuser.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
    private usersRepository: typeof Users,
  ){}
  
  async createUser(dto: CreateUserDto): Promise<Users>{
    const user = await this.usersRepository.create(dto);
    return user;
  }

  async getAllusers(): Promise<Users[]> {
    const users = await this.usersRepository.findAll();
    return users;
  }
}
