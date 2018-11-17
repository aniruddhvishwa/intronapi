import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerGroupEntity } from './customer-group.entity';

@Injectable()
export class CustomerGroupService{
    constructor(
        @InjectRepository(CustomerGroupEntity)
        private readonly customerGroupRepository: Repository <CustomerGroupEntity>,
    ){}

    async create(customerGroup: CustomerGroupEntity){
        this.customerGroupRepository
        .createQueryBuilder()
        .insert()
        .into(CustomerGroupEntity)
        .values(customerGroup)
        .execute();
    }

    async findAll(): Promise<CustomerGroupEntity[]>{
        return this.customerGroupRepository.find();
    }
}