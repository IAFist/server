import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createuser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
/*
  public create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.username = createUserDto.username;
    user.walletid = createUserDto.walletid;


    return this.usersRepository.save(user);
  }
*/
  
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find({
    }); //`This action returns all users`;
  }
  
  async createUser(CreateUserDto: CreateUserDto): Promise<Users>{
    const user = await this.usersRepository.create(CreateUserDto);
    return user;
  }

  async findOneByName(name: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { name: name },
    });
  }

  async findOneById(user_index: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { user_index: user_index },
    });
  }
}