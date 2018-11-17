import { Controller, Get, Post, Delete,Put, Body,Param } from '@nestjs/common';
import { MstsiteService } from './mstsite.service';
import { Mstsite } from './mstsite.dto';
import { ApiResponse } from '@nestjs/swagger';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('mstsite')
export class MstsiteController {
    constructor(private readonly mstsiteService: MstsiteService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() mstsite: Mstsite) {
        this.mstsiteService.create(mstsite);
    }

    @Get()
    async findAll(){
        return this.mstsiteService.findAll();
    }
    @Get(':id')
     findOne(@Param('id') id: number) {
      return this.mstsiteService.showOne(id);
    }


    @Put(':id')
    update(@Param('id') id:number, @Body() data:Partial<Mstsite>){
        return this.mstsiteService.update(id,data);
    }
    
    
    @Delete(':id')
     remove(@Param('id') id: number) {
      return this.mstsiteService.destroy(id);
    }

}
