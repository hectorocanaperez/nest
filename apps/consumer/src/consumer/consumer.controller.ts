import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
//import { ConsumerDto } from './consumer.dto';
//import { Consumer } from './consumer.entity';

@Controller('consumers')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Get()
  async getHello() {
    return this.consumerService.getHello();
  }
  
/*
  @Get('todos')
  async getAll(){
    return this.consumerService.getAll();
  }

  @Get('datas')
  async getData(){
    return this.consumerService.getData();
  }

 @Post()
  async createConsumer(@Body() consumerDto: ConsumerDto):Promise<Consumer>{
      return this.consumerService.create(consumerDto)
  }*/

  
}





 
  

