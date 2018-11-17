import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsttableController } from './msttable.controller';
import { MsttableEntity } from './msttable.entity';
import { MsttableService } from './msttable.service';

@Module({
  imports: [TypeOrmModule.forFeature([MsttableEntity])],
  controllers: [MsttableController],
  providers: [
    MsttableService,
  ],
})
export class MsttableModule {}
