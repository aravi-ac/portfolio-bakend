import { EntityRepository, Repository } from 'typeorm'
import { Carrers } from './carrers.entity'

@EntityRepository(Carrers)
export class CarrerRepositry extends Repository<Carrers> {}
