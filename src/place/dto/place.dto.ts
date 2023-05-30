import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreatePlaceDto {
  @ApiModelProperty()
    readonly city: string;
  }
  