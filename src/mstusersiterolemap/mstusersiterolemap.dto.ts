import { ApiModelProperty } from '@nestjs/swagger';

export class Mstusersiterolemap {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}