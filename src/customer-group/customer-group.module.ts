import { Module } from '@nestjs/common';
import { CustomerGroupController } from './customer-group.controller';

@Module({
  controllers: [CustomerGroupController],
})
export class CustomerGroupModule {}
