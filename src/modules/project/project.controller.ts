import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ProjectData } from 'src/common/interfaces/project'
import { CreateProjectDto } from './dto/project.dto'
import { ProjectService } from './project.service'

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/')
  getAll(): ProjectData[] {
    return this.projectService.readAll()
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  create(@Body() payload: CreateProjectDto) {
    return this.projectService.addNew(payload)
  }
}
