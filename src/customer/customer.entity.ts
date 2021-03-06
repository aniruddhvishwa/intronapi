import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CustomerEntity{
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ })
    name: string;

    @Column({ })
    lastname: string;

    @CreateDateColumn({})
    created_at;

    @UpdateDateColumn()
    updated_at;

    // @Column({})
    // groupid: number;

}