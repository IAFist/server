import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateTransportDto {
  
    @ApiModelProperty()
    qr_code: string;
    @ApiModelProperty()
    corX: number;
    @ApiModelProperty()
    corY: number;
    @ApiModelProperty()
    battery: number;
    @ApiModelProperty()
    stan_id: number;
    @ApiModelProperty()
    type_id: number;
  }
  