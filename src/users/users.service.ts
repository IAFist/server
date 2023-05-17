import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createuser.dto';
import { UpdateUserDto } from './dto/updateuser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.username = createUserDto.username;
    user.walletid = createUserDto.walletid;


    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
    }); //`This action returns all users`;
  }
  
  async findOneByName(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username: username },
    });
  }

  async findOneById(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Update

    await this.usersRepository.update(id,{
     
      username: updateUserDto.username,
      email: updateUserDto.email,

    });

    // Return
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}