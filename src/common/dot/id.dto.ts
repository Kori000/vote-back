import { IsNotEmpty, Matches } from 'class-validator'

export class IdDto {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number
}
