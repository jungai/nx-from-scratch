import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { IuInterceptor } from '@next-backend/nest/interceptors';

import { AppService } from './app.service';

@UseInterceptors(IuInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
