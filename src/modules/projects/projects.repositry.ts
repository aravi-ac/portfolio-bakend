import { EntityRepository, Repository } from 'typeorm'
import { Projects } from './projects.entity'

@EntityRepository(Projects)
export class ProjectRepository extends Repository<Projects> {}
