
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerDto } from './producer.dto';
import { Producer } from './producer.entity';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get()
  async getHello() {
    return this.producerService.getHello();
  }
  @Get('todos')
  async getAll(){
    return this.producerService.getAll();
  }

 @Post('producers')
  async createProducer(@Body() req: ProducerDto){
      return this.producerService.create(req)
  }

  
}
