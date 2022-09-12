/* eslint-disable @typescript-eslint/no-unused-vars */

import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from 'apps/transaction/src/transaction/transaction.dto';
import { Repository } from 'typeorm';
import { ProducerDto } from './producer.dto';
import { Producer } from './producer.entity';



@Injectable()
export class ProducerService {
  constructor(@InjectRepository(Producer) private producerRepository: Repository<Producer>,
  @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>){}

  async getHello(){
    return "Hello World!";
  }
  async getAll(): Promise<Producer[]> {
      return this.producerRepository.find()
  }
  async create(producerDto: ProducerDto):Promise<Producer> {
    
    console.log(producerDto)
    const transaction = await this.transactionRepository.findOne({

      where:{
        transactionId: producerDto.transactionId

      }
      
       
    });

    if (transaction) {

      const producer = new Producer();

      producer.transactionId=transaction.transactionId;


      producer.time = transaction.time;

      producer.type = producerDto.type;

      producer.status = producerDto.status;

      await this.producerRepository.save(producer);

      return producer;

    } else {

      throw new BadRequestException('transaction not exists');

    }

}

}
