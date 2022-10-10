import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HomeData } from './common/interfaces/home';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): HomeData {
    return this.appService.getHomeData();
  }
}
