import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectController } from './projects.controller'
import { ProjectRepository } from './projects.repositry'
import { ProjectService } from './projects.service'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectRepository])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
