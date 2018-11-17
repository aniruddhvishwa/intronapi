import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MsttransactionEntity } from './msttransaction.entity';
import { Msttransaction } from './msttransaction.dto';

@Injectable()
export class MsttransactionService{
    constructor(
        @InjectRepository(MsttransactionEntity)
        private readonly msttransactionRepository: Repository <MsttransactionEntity>,
    ){}

    async create(msttransaction: Msttransaction){
        this.msttransactionRepository
        .createQueryBuilder()
        .insert()
        .into(MsttransactionEntity)
        .values(msttransaction)
        .execute();
    }

    async findAll(): Promise<Msttransaction[]>{
        return this.msttransactionRepository.find();
    }
}