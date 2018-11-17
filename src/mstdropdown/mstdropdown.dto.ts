import { ApiModelProperty } from '@nestjs/swagger';

export class Mstdropdown {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}