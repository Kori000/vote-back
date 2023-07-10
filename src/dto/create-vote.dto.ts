import { IsString, IsInt, IsNotEmpty } from 'class-validator'

export class CreateVoteDto {
  @IsString()
  @IsNotEmpty()
  title: string
}
