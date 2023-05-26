import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateTripDto {
  @ApiModelProperty()
    readonly transport_id: number;
    @ApiModelProperty()
    readonly user_id: number;
    @ApiModelProperty()
    readonly place_id: number;
    @ApiModelProperty()
    readonly time_start: Date;
    @ApiModelProperty()
    readonly time_end: Date;
    @ApiModelProperty()
    readonly duration: number;
    @ApiModelProperty()
    readonly cost: number;
    @ApiModelProperty()
    readonly foto:string;
  }