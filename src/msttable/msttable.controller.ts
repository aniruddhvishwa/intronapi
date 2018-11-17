import { Controller, Get, Post, Body } from '@nestjs/common';
import { MsttableService } from './msttable.service';
import { Msttable } from './msttable.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('msttable')
export class MsttableController {
    constructor(private readonly msttableService: MsttableService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() msttable: Msttable) {
        this.msttableService.create(msttable);
    }

    @Get()
    async findAll(){
        return this.msttableService.findAll();
    }
}
