import { Controller, Get, Post, Body } from '@nestjs/common';
import { MsttransactionService } from './msttransaction.service';
import { Msttransaction } from './msttransaction.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('msttransaction')
export class MsttransactionController {
    constructor(private readonly msttransactionService: MsttransactionService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() msttransaction: Msttransaction) {
        this.msttransactionService.create(msttransaction);
    }

    @Get()
    async findAll(){
        return this.msttransactionService.findAll();
    }
}
