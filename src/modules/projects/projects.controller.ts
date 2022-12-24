import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ProjectData } from 'src/common/interfaces/project'
import { CreateProjectDto } from './dto/projects.dto'
import { ProjectService } from './projects.service'

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/')
  getAll(): ProjectData[] {
    return []
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  create(@Body() payload: CreateProjectDto) {
    return this.projectService.createNewProject(payload)
  }
}
