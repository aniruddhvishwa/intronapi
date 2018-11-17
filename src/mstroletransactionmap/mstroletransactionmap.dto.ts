import { ApiModelProperty } from '@nestjs/swagger';

export class Mstroletransactionmap {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}