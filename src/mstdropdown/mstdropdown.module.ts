import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstdropdownController } from './mstdropdown.controller';
import { MstdropdownEntity } from './mstdropdown.entity';
import { MstdropdownService } from './mstdropdown.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstdropdownEntity])],
  controllers: [MstdropdownController],
  providers: [
    MstdropdownService,
  ],
})
export class MstdropdownModule {}
