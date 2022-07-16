import { Module } from '@nestjs/common';
import { PrismaService } from './nest-prisma.service.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class NestPrismaModule {}

export * from './nest-prisma.service.module';
