import { Module } from '@nestjs/common'
import { dataSourceProviders } from './index.provider'

@Module({
  exports: [...dataSourceProviders],
  providers: [...dataSourceProviders],
})
export class DatabaseModule {}
