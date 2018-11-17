import { Injectable, Inject, All } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MstsiteEntity } from './mstsite.entity';
import { Mstsite } from './mstsite.dto';

@Injectable()
export class MstsiteService{
    constructor(
        @InjectRepository(MstsiteEntity)
        private readonly mstsiteRepository: Repository <MstsiteEntity>,
    ){}

    async create(mstsite: Mstsite){
        this.mstsiteRepository
        .createQueryBuilder()
        .insert()
        .into(MstsiteEntity)
        .values(mstsite)
        .execute();
    }

    async findAll(): Promise<Mstsite[]>{
        return this.mstsiteRepository.find();
    }

    async showOne(id: number){
          return await this.mstsiteRepository.findOne({where: {id}});

      }


      async update(id:number, data:Partial<Mstsite>){
        await this.mstsiteRepository.update({id},data);
        return await this.mstsiteRepository.findOne({id});
    }


      async destroy(id:number){
        await this.mstsiteRepository.delete( {id} );
        return {deleted:true};

    }



}