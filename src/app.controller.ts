import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { AppService } from './app.service'
import { UpdateVoteDto } from './dto/update-vote.dto'
import { CreateVoteDto } from './dto/create-vote.dto'
import { DeleteVoteDto } from './dto/delete-vote.dto'

@Controller('api/vote')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getList() {
    return this.appService.getList()
  }

  @Post('add')
  add(@Body() createVoteDto: CreateVoteDto) {
    return this.appService.add(createVoteDto)
  }

  @Post()
  vote(@Body() updateVoteDto: UpdateVoteDto) {
    return this.appService.vote(updateVoteDto)
  }

  @Post('delete')
  delete(@Body() deleteVoteDto: DeleteVoteDto) {
    return this.appService.delete(deleteVoteDto)
  }
}
