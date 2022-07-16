import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NestPrismaModule } from '@next-backend/nest/prisma';
import configs from '../configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    NestPrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
