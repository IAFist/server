import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateTripDto {
  @ApiModelProperty()
    readonly transport_id: number;
    @ApiModelProperty()
    readonly user_id: number;
    @ApiModelProperty()
    readonly place_id: number;
    @ApiModelProperty()
    readonly time_start: string;
    @ApiModelProperty()
    readonly time_end: string;
    @ApiModelProperty()
    readonly duration: string;
    @ApiModelProperty()
    readonly cost: number;
    // @ApiModelProperty()
    // readonly foto:string;
  }