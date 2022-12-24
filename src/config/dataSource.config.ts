import { DataSourceOptions } from 'typeorm'

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'portfolio',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}
