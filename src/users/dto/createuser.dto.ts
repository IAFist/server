import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateUserDto {
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly phone: string;
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly kod: string;
  
}
