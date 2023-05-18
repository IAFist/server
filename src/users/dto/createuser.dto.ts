
import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import internal from 'stream';

export class CreateUserDto {
  
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  phone: string;
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  wallet_id: internal;
  @ApiModelProperty()
  kod: internal;
  
}
