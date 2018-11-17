import { Controller, Get, Post, Body } from '@nestjs/common';
import { MstuserService } from './mstuser.service';
import { Mstuser } from './mstuser.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('mstuser')
export class MstuserController {
    constructor(private readonly mstuserService: MstuserService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstuser: Mstuser) {
        this.mstuserService.create(mstuser);
    }

    @Get()
    async findAll(){
        return this.mstuserService.findAll();
    }
}
