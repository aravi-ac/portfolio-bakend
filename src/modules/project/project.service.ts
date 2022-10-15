import { Injectable } from '@nestjs/common'
import { data } from 'src/common/constants/project'
import { ProjectData } from 'src/common/interfaces/project'

@Injectable()
export class ProjectService {
  projects: ProjectData[] = [{ ...data }]

  readAll() {
    return this.projects
  }

  addNew(data: ProjectData) {
    const value = { ...data }
    value.id = '1'
    value.created_at = new Date()
    value.update_at = new Date()
    this.projects = [...this.projects, value]

    return {
      data: {
        ...value,
      },
      message: 'Created success',
    }
  }
}
