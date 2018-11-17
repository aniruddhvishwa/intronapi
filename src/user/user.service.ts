import { Injectable, Inject, All } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.dto';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository <UserEntity>,
    ){}

    async create(user: User){
        this.userRepository
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values(user)
        .execute();
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find();

    }


    



    async showOne(id: number){
          return await this.userRepository.findOneOrFail({where: {id}});



      }


      async update(id:number, data:Partial<User>){
        await this.userRepository.update({id},data);
        return await this.userRepository.findOne({id});
    }


      async destroy(id:number){
        await this.userRepository.delete( {id} );
        return {deleted:true};

    }

async findeEail(email:string){
          return await this.userRepository.createQueryBuilder("entity")
          .select(["entity.email"])
          .getMany();
}    



}