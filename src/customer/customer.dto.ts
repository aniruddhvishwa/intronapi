import { ApiModelProperty } from '@nestjs/swagger';

export class Customer {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;
}