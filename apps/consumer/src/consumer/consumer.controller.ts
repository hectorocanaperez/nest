import { Controller, Get} from '@nestjs/common';
import { ConsumerService } from './consumer.service';


@Controller('consumers')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Get()
  async getHello() {
    return this.consumerService.getHello();
  }
    
}





 
  

