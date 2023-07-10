import { Injectable } from '@nestjs/common'
import { App } from './entity/app.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateVoteDto } from './dto/create-vote.dto'
import { UpdateVoteDto } from './dto/update-vote.dto'
import { DeleteVoteDto } from './dto/delete-vote.dto'

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private appsRepository: Repository<App>,
  ) {}

  getList() {
    const list = this.appsRepository.find({ where: { is_delete: false } })
    return list
  }

  add(createVoteDto: CreateVoteDto) {
    const { title } = createVoteDto
    const app = new App()
    app.title = title
    this.appsRepository.save(app)
  }

  vote(updateVoteDto: UpdateVoteDto) {
    const { id } = updateVoteDto
    const res = this.appsRepository.increment({ id }, 'vote_num', 1)
    return res
  }

  async delete(deleteVoteDto: DeleteVoteDto) {
    const { id } = deleteVoteDto
    const res = await this.appsRepository.update({ id }, { is_delete: true })
    return res
  }
}
