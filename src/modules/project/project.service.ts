import { Injectable } from '@nestjs/common'
import { data } from 'src/common/constants/project'

@Injectable()
export class ProjectService {
  readAll() {
    return [{ ...data }]
  }
}
