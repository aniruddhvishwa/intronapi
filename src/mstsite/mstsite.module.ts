import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstsiteController } from './mstsite.controller';
import { MstsiteEntity } from './mstsite.entity';
import { MstsiteService } from './mstsite.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstsiteEntity])],
  controllers: [MstsiteController],
  providers: [
    MstsiteService,
  ],
})
export class MstsiteModule {}
