import { Injectable } from '@nestjs/common';
import { TLoveList } from '@next-backend/types';
import { Love } from '@next-backend/enums';

@Injectable()
export class AppService {
  getData() {
    const list: TLoveList = ['naruk', 'iu', 'rose', 'winter', 'karina'];
    console.log('hot reload!!');
    return {
      message: `Welcome to nest-service! ${list.join()}`,
      love: Object.values(Love),
    };
  }
}
