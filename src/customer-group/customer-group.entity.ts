import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerGroupEntity {
    @PrimaryGeneratedColumn({})
    groupid: number;

    @Column({})
    groupname: string;

    @Column({ type: 'varchar', length: 200 })
    groupdesc: string;
}