import { Injectable } from '@nestjs/common';
import { data } from './common/constants/home';
import { HomeData } from './common/interfaces/home';

@Injectable()
export class AppService {
  getHomeData(): HomeData {
    return { ...data };
  }
}
