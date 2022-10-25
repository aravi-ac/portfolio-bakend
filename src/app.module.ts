import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/index.module'
import { ProjectModule } from './modules/project/project.module'

@Module({
  imports: [ProjectModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
