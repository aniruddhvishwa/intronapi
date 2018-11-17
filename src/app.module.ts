import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

import { UserModule } from './user/user.module';
import { MstsiteModule } from './mstsite/mstsite.module';

import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerGroupModule } from './customer-group/customer-group.module';

import { AuthModule } from './auth/auth.module';

import * as passport from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        "type":"postgres",
        "host":"localhost",
        "port":5432,
        "username":"postgres",
        "password":"root",
        "database":"joister",
        "entities": [__dirname + '/**/*.entity{.ts,.js}'],
        "synchronize": true,
        migrations: [__dirname + '/migration/**/*.ts'],
        subscribers: [__dirname + '/subscriber/**/*.ts'],
    }
    ),
    AuthModule,
    CustomerModule,
    SharedModule,
    UserModule,
    MstsiteModule,
    TypeOrmModule.forRoot(),
    CustomerGroupModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
