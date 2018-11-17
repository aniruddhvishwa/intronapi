import { ApiModelProperty } from '@nestjs/swagger';

export class Msttransaction {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}