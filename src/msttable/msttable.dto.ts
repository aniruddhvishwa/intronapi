import { ApiModelProperty } from '@nestjs/swagger';

export class Msttable {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}