import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dataSourceConfig } from './config/dataSource.config'
import { ProjectModule } from './modules/projects/projects.module'

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceConfig), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
