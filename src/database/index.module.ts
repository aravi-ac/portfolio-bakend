import { Module } from '@nestjs/common'
import { dataSourceProvider } from './data-source'

@Module({
  exports: [...dataSourceProvider],
  providers: [...dataSourceProvider],
})
export class DatabaseModule {}
