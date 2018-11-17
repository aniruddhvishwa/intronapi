import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstusersiterolemapEntity } from './mstusersiterolemap.entity';
import { Mstusersiterolemap } from './mstusersiterolemap.dto';

@Injectable()
export class MstusersiterolemapService{
    constructor(
        @InjectRepository(MstusersiterolemapEntity)
        private readonly mstusersiterolemapRepository: Repository <MstusersiterolemapEntity>,
    ){}

    async create(mstusersiterolemap: Mstusersiterolemap){
        this.mstusersiterolemapRepository
        .createQueryBuilder()
        .insert()
        .into(MstusersiterolemapEntity)
        .values(mstusersiterolemap)
        .execute();
    }

    async findAll(): Promise<Mstusersiterolemap[]>{
        return this.mstusersiterolemapRepository.find();
    }
}