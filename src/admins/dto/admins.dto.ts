import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateAdminsDto {
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  readonly password: string;
}