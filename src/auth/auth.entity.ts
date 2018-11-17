import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AuthEntity{
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ })
    email: string;
    

    @CreateDateColumn({})
    created_at;

    @UpdateDateColumn()
    updated_at;

}