import { RandomUUIDOptions } from 'crypto'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Carrers {
  @PrimaryGeneratedColumn('uuid')
  id: RandomUUIDOptions

  @Column('jsonb')
  duration: object

  @Column()
  name: string

  @Column()
  where: string

  @Column()
  description: string
}
