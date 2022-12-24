import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateProjectDto } from './dto/projects.dto'
import { ProjectRepository } from './projects.repositry'

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  async createNewProject(project: CreateProjectDto) {
    return await this.projectRepository.save(project)
  }
}
