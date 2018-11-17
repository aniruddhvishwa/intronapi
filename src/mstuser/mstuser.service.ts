import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstuserEntity } from './mstuser.entity';
import { Mstuser } from './mstuser.dto';

@Injectable()
export class MstuserService{
    constructor(
        @InjectRepository(MstuserEntity)
        private readonly mstuserRepository: Repository <MstuserEntity>,
    ){}

    async create(mstuser: Mstuser){
        this.mstuserRepository
        .createQueryBuilder()
        .insert()
        .into(MstuserEntity)
        .values(mstuser)
        .execute();
    }

    async findAll(): Promise<Mstuser[]>{
        return this.mstuserRepository.find();
    }
}