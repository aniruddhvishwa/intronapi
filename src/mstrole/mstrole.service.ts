import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstroleEntity } from './mstrole.entity';
import { Mstrole } from './mstrole.dto';

@Injectable()
export class MstroleService{
    constructor(
        @InjectRepository(MstroleEntity)
        private readonly mstroleRepository: Repository <MstroleEntity>,
    ){}

    async create(mstrole: Mstrole){
        this.mstroleRepository
        .createQueryBuilder()
        .insert()
        .into(MstroleEntity)
        .values(mstrole)
        .execute();
    }

    async findAll(): Promise<Mstrole[]>{
        return this.mstroleRepository.find();
    }
}