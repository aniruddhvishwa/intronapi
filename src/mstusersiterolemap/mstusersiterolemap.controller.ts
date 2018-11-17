import { Controller, Get, Post, Body } from '@nestjs/common';
import { MstusersiterolemapService } from './mstusersiterolemap.service';
import { Mstusersiterolemap } from './mstusersiterolemap.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('mstusersiterolemap')
export class MstusersiterolemapController {
    constructor(private readonly mstusersiterolemapService: MstusersiterolemapService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstusersiterolemap: Mstusersiterolemap) {
        this.mstusersiterolemapService.create(mstusersiterolemap);
    }

    @Get()
    async findAll(){
        return this.mstusersiterolemapService.findAll();
    }
}
