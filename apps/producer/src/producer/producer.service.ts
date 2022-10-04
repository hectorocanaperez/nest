/* eslint-disable @typescript-eslint/no-unused-vars */

import  { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from 'apps/transaction/src/transaction/transaction.dto';
import { Repository,DataSource, TransactionNotStartedError } from 'typeorm';
import { ProducerDto } from './producer.dto';
import { Producer } from './producer.entity';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import Ajv from 'ajv';

const ajv = new Ajv() 


@Injectable()
export class ProducerService {
  constructor(@InjectRepository(Producer) private producerRepository: Repository<Producer>,private apicurioService:ApicurioSchemaService,
  @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>){}

  async getHello(){
    return "Hello World!";
  }
  async getAll(): Promise<Producer[]> {
      return this.producerRepository.find()
  }
  async create(req: ProducerDto) {
    const schemaVal= await this.apicurioService.getSchema(req);
    console.log("objeto",schemaVal)
    
    if (!this.apicurioService.validate(schemaVal.properties.data,req.data)){
        throw new BadRequestException('el schema no es correcto')

    }else{
      console.log("el esquema es correcto");
      
      const transactionS = await this.transactionRepository.findOne({
        
        where:{
          transactionId: req.transactionId
        }  
      
      });
      
      const flowId = await this.transactionRepository.findOne({
  
        where:{
          flowId: req.flowId
        }
      });
  
      if (transactionS && flowId) {
  
        const producer = new Producer();
  
        producer.transactionId=transactionS.transactionId;
        producer.flowId=transactionS.flowId;
        producer.time = transactionS.time;
        producer.tipo = req.tipo;
        producer.data=req.data;
        
        console.log("estooo es el producer creado",producer)
        return this.producerRepository.save(producer);
        

      } else {
        throw new BadRequestException(' producer nor created');
      }

    }
       
  }

}


