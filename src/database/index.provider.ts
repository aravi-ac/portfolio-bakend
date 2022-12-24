import { Logger } from '@nestjs/common'
import { dataSourceConfig } from 'src/config/dataSource.config'
import { DataSource } from 'typeorm'

export const dataSourceProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceConfig)

      return dataSource
        .initialize()
        .then(() => Logger.log('Data Source has been initialized!'))
        .catch((error) => Logger.error('Error during Data Source initialization', error))
    },
  },
]
