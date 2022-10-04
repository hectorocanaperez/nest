import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { TransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transaction.service';



@Controller('transactions')
export class TransactionsController {
  constructor(
    //@Inject('TRANS_SERVICE')
    private readonly transactionsService: TransactionsService) {}

  @Get()
  async getHello() {
    return this.transactionsService.getHello();
  }

  @Get('todos')
  async getAll(){
    return this.transactionsService.getAll();
  }

  @Post('transactions')
   async createTransaction(@Body() req: TransactionDto){
     return this.transactionsService.create(req)
   }
  
}
