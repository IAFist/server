
import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateUserDto {
  
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
  confirmpassword: string;
  @ApiModelProperty()
  username: string;
  @ApiModelProperty()
  walletid: string;
  
}
