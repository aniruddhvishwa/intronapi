import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstroletransactionmapController } from './mstroletransactionmap.controller';
import { MstroletransactionmapEntity } from './mstroletransactionmap.entity';
import { MstroletransactionmapService } from './mstroletransactionmap.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstroletransactionmapEntity])],
  controllers: [MstroletransactionmapController],
  providers: [
    MstroletransactionmapService,
  ],
})
export class MstroletransactionmapModule {}
