import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstroleController } from './mstrole.controller';
import { MstroleEntity } from './mstrole.entity';
import { MstroleService } from './mstrole.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstroleEntity])],
  controllers: [MstroleController],
  providers: [
    MstroleService,
  ],
})
export class MstroleModule {}
