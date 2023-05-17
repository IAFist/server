import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './createuser.dto';

//export class UpdateUserDto extends PartialType(CreateUserDto) {
  export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['password', 'confirmpassword'])) {
  }