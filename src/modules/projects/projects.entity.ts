import { RandomUUIDOptions } from 'crypto'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: RandomUUIDOptions

  @Column('timestamptz')
  createdAt: Date

  @Column('timestamptz')
  updatedAt: Date

  @Column('text')
  title: string

  @Column('text')
  description: string

  @Column('text')
  sourceUrl: string

  @Column('simple-array')
  languagesUsed: string[]

  @Column('text')
  coverPhoto: string
}
