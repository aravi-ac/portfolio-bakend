import { IsNotEmpty } from 'class-validator'

export class CreateProjectDto {
  @IsNotEmpty({ message: 'Project title is required!' })
  title: string

  @IsNotEmpty({ message: 'Project description is required!' })
  description: string

  @IsNotEmpty({ message: 'Project client is required!' })
  client: string

  @IsNotEmpty({ message: 'Languages used in this project is required!' })
  languages: string[]

  @IsNotEmpty({ message: 'Cover picture is required!' })
  cover_picture: string

  url: string
}
