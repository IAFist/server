import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateWalletDto } from './createwallet.dto';

  export class UpdateWalletDto extends PartialType(OmitType(CreateWalletDto, ['qr_code'])) {

  }