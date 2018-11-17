import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() customer: Customer) {
        this.customerService.create(customer);
    }

    @Get()
    async findAll(){
        return this.customerService.findAll();
    }
}
