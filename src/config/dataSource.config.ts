import { DataSourceOptions } from 'typeorm'

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'ec2-3-220-207-90.compute-1.amazonaws.com',
  port: 5432,
  username: 'jrbwynwuwbinyi',
  password: 'b3474301822a3da73aca7dd9d4259e35a301eb8924a9a4d43c595468c7674822',
  database: 'd4t5u7bnuia8u7',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
}
