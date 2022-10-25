import { DataSource } from 'typeorm'
import { dataSourceConfig } from 'src/config/dataSource.config'

export const dataSourceProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceConfig)

      return dataSource
        .initialize()
        .then(() => console.log('Data Source has been initialized!'))
        .catch((error) =>
          console.error('Error during Data Source initialization', error),
        )
    },
  },
]
