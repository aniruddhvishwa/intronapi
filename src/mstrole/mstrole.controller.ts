import { Controller, Get, Post, Body } from '@nestjs/common';
import { MstroleService } from './mstrole.service';
import { Mstrole } from './mstrole.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('mstrole')
export class MstroleController {
    constructor(private readonly mstroleService: MstroleService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstrole: Mstrole) {
        this.mstroleService.create(mstrole);
    }

    @Get()
    async findAll(){
        return this.mstroleService.findAll();
    }
}
