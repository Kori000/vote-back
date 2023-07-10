import { Common } from 'src/common/entity/common.entity'
import { Entity, Column } from 'typeorm'

@Entity('vote')
export class App extends Common {
  @Column()
  title: string

  @Column({
    default: 0,
  })
  vote_num: string
}
