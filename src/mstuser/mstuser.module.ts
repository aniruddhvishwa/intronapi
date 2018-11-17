import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstuserController } from './mstuser.controller';
import { MstuserEntity } from './mstuser.entity';
import { MstuserService } from './mstuser.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstuserEntity])],
  controllers: [MstuserController],
  providers: [
    MstuserService,
  ],
})
export class MstuserModule {}
