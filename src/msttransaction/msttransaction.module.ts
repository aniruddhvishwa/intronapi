import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsttransactionController } from './msttransaction.controller';
import { MsttransactionEntity } from './msttransaction.entity';
import { MsttransactionService } from './msttransaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([MsttransactionEntity])],
  controllers: [MsttransactionController],
  providers: [
    MsttransactionService,
  ],
})
export class MsttransactionModule {}
