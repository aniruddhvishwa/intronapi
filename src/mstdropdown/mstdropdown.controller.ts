import { Controller, Get, Post, Body } from '@nestjs/common';
import { MstdropdownService } from './mstdropdown.service';
import { Mstdropdown } from './mstdropdown.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('mstdropdown')
export class MstdropdownController {
    constructor(private readonly mstdropdownService: MstdropdownService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstdropdown: Mstdropdown) {
        this.mstdropdownService.create(mstdropdown);
    }

    @Get()
    async findAll(){
        return this.mstdropdownService.findAll();
    }
}
