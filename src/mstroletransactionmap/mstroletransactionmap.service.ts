import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstroletransactionmapEntity } from './mstroletransactionmap.entity';
import { Mstroletransactionmap } from './mstroletransactionmap.dto';

@Injectable()
export class MstroletransactionmapService{
    constructor(
        @InjectRepository(MstroletransactionmapEntity)
        private readonly mstroletransactionmapRepository: Repository <MstroletransactionmapEntity>,
    ){}

    async create(mstroletransactionmap: Mstroletransactionmap){
        this.mstroletransactionmapRepository
        .createQueryBuilder()
        .insert()
        .into(MstroletransactionmapEntity)
        .values(mstroletransactionmap)
        .execute();
    }

    async findAll(): Promise<Mstroletransactionmap[]>{
        return this.mstroletransactionmapRepository.find();
    }
}