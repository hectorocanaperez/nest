/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';
import { BadRequestException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { response } from 'express';

//const {Client}=require('pg');

@Injectable()
export class TransactionsService {
  
  constructor(@InjectRepository(Transaction) private transactionRepository: Repository<Transaction>){}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  

  async getHello(){
    return "Hello World!";
  }
  
  async getAll(): Promise<Transaction[]> {
      return this.transactionRepository.find();
    
  }

   async create(transactionDto: TransactionDto):Promise<Transaction> {

    const transactionSearch = await this.transactionRepository.findOne({

      where:{
        customId: transactionDto.customId

      }
      
       
    });
     
    
     if (!transactionSearch){
    const transaction = new Transaction()
     transaction.customId = transactionDto.customId;
     transaction.process=transactionDto.process;
     transaction.time = transactionDto.time;
      return this.transactionRepository.save(transaction);

     }else{

      throw new BadRequestException('transaction not create');
     }
   
    
  

  
   }

}
