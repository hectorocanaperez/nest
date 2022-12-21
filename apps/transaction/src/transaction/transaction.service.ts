/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException,Logger } from '@nestjs/common';
import { TransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import Ajv from 'ajv';
import { TransactionsModule } from './transaction.module';
const jsf=require('json-schema-faker');

const ajv = new Ajv() 


@Injectable()
export class TransactionsService {
  
  constructor(
    @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
    private apicurioService:ApicurioSchemaService
  ){}
  
  
  async getHello(){
    return "Hello World!";
  }
  
  async getAll(): Promise<Transaction[]> {
      return this.transactionRepository.find();
    
  }

  async create(req: TransactionDto):Promise<Transaction> {

    const schemaVal= await this.apicurioService.getSchema(req.flowId);
    try{
      var faker=jsf(schemaVal);
      console.log("este es el schema",schemaVal)
      const validar=await this.apicurioService.validate(schemaVal,faker)
    }catch(e){
      console.log("error",e)
      throw new BadRequestException('el schema no es correcto')
    }


    console.log("el resultado de faker es :",faker);
    const transaction=new Transaction();
    transaction.flowId=req.flowId,
    transaction.customId=req.customId,
    transaction.process=req.process
    transaction.data=faker
 
    if (transaction){

        return this.transactionRepository.save(transaction);
    }else{
        throw new BadRequestException('transaction not create');
    }
  }
}




     
    








    

    
  
