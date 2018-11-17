import { ApiModelProperty } from '@nestjs/swagger';

export class User {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly lastname: string;

    @ApiModelProperty()
    readonly email: string;

}

