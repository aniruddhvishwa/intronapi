import { Entity, Column, OneToOne, JoinColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import {CustomerEntity} from '../customer/customer.entity'
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ })
    name: string;

    @Column({ })
    lastname: string;

    @Column({length:100 })
    email: string;
    

    // @OneToOne(type => CustomerEntity)
    // @JoinColumn()
    // profile: CustomerEntity;
 

    @CreateDateColumn({})
    created_at;

    @UpdateDateColumn()
    updated_at;


}