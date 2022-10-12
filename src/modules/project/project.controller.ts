import { Controller, Get } from '@nestjs/common'
import { ProjectData } from 'src/common/interfaces/project'
import { ProjectService } from './project.service'

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/')
  getAll(): ProjectData[] {
    return this.projectService.readAll()
  }
}
