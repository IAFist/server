import { ApiModelProperty, } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateStanDto {
    @ApiModelProperty()
    readonly status: string;
}