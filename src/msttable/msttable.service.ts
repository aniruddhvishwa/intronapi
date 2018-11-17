import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MsttableEntity } from './msttable.entity';
import { Msttable } from './msttable.dto';

@Injectable()
export class MsttableService{
    constructor(
        @InjectRepository(MsttableEntity)
        private readonly msttableRepository: Repository <MsttableEntity>,
    ){}

    async create(msttable: Msttable){
        this.msttableRepository
        .createQueryBuilder()
        .insert()
        .into(MsttableEntity)
        .values(msttable)
        .execute();
    }

    async findAll(): Promise<Msttable[]>{
        return this.msttableRepository.find();
    }
}