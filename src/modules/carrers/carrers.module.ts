import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarrerController } from './carrers.controller'
import { CarrerRepositry } from './carrers.repositry'
import { CarrerService } from './carrers.service'

@Module({
  imports: [TypeOrmModule.forFeature([CarrerRepositry])],
  controllers: [CarrerController],
  providers: [CarrerService],
})
export class CarrerModule {}
