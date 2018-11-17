import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MstusersiterolemapController } from './mstusersiterolemap.controller';
import { MstusersiterolemapEntity } from './mstusersiterolemap.entity';
import { MstusersiterolemapService } from './mstusersiterolemap.service';

@Module({
  imports: [TypeOrmModule.forFeature([MstusersiterolemapEntity])],
  controllers: [MstusersiterolemapController],
  providers: [
    MstusersiterolemapService,
  ],
})
export class MstusersiterolemapModule {}
