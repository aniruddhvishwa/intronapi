import { ApiModelProperty } from '@nestjs/swagger';

export class Mstsite {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}