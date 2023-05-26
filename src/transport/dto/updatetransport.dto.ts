import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateTransportDto } from './transport.dto';

  export class UpdateTransportDto extends PartialType(OmitType(CreateTransportDto, ['type_id','qr_code'])) {

  }