import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { Customer } from './customer.dto';

@Injectable()
export class CustomerService{
    constructor(
        @InjectRepository(CustomerEntity)
        private readonly customerRepository: Repository <CustomerEntity>,
    ){}

    async create(customer: Customer){
        this.customerRepository
        .createQueryBuilder()
        .insert()
        .into(CustomerEntity)
        .values(customer)
        .execute();
    }

    async findAll(): Promise<Customer[]>{
        return this.customerRepository.find();
    }
}