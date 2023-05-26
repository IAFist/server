import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateTypetransportDto {
  @ApiModelProperty()
    readonly type_transport_name: string;
    @ApiModelProperty()
    readonly price_of_1: number;
  }
  