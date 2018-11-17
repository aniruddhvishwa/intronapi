import { ApiModelProperty } from '@nestjs/swagger';

export class Mstuser {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}