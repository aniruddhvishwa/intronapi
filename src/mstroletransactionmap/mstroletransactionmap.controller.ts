import { Controller, Get, Post, Body } from '@nestjs/common';
import { MstroletransactionmapService } from './mstroletransactionmap.service';
import { Mstroletransactionmap } from './mstroletransactionmap.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('Mstroletransactionmap')
export class MstroletransactionmapController {
    constructor(private readonly mstroletransactionmapService: MstroletransactionmapService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstroletransactionmap: Mstroletransactionmap) {
        this.mstroletransactionmapService.create(mstroletransactionmap);
    }

    @Get()
    async findAll(){
        return this.mstroletransactionmapService.findAll();
    }
}
