import {
  Controller,
  Get,
  UseInterceptors,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { IuInterceptor } from '@next-backend/nest/interceptors';
import { PrismaService } from '@next-backend/nest/prisma';

import { AppService } from './app.service';

@UseInterceptors(IuInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('prisma')
  @HttpCode(HttpStatus.OK) // by default is OK but remind it!
  async getSong() {
    return await this.prisma.song.findMany();
  }

  @Post('prisma')
  @HttpCode(HttpStatus.CREATED)
  async create() {
    return await this.prisma.song.create({ data: { name: 'iu iu iu' } });
  }
}
