import { ApiModelProperty } from '@nestjs/swagger';

export class Mstrole {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}