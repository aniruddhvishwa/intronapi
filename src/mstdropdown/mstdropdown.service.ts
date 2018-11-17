import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstdropdownEntity } from './mstdropdown.entity';
import { Mstdropdown } from './mstdropdown.dto';

@Injectable()
export class MstdropdownService{
    constructor(
        @InjectRepository(MstdropdownEntity)
        private readonly mstdropdownRepository: Repository <MstdropdownEntity>,
    ){}

    async create(mstdropdown: Mstdropdown){
        this.mstdropdownRepository
        .createQueryBuilder()
        .insert()
        .into(MstdropdownEntity)
        .values(mstdropdown)
        .execute();
    }

    async findAll(): Promise<Mstdropdown[]>{
        return this.mstdropdownRepository.find();
    }
}