/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';
import { JsonSchemaService } from 'schemaRegistryLibrary/jsonService';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { response } from 'express';
import { validate } from 'class-validator';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import Ajv from 'ajv';
//import jsf from "json-schema-faker";
//import * as generate from 'json-schema-faker';
//const {Client}=require('pg');
const jsf=require('json-schema-faker');
const ajv = new Ajv() 




@Injectable()
export class TransactionsService {
  
  constructor(
    @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
    private apicurioService:ApicurioSchemaService
  ){}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  
  async getHello(){
    return "Hello World!";
  }
  
  async getAll(): Promise<Transaction[]> {
      return this.transactionRepository.find();
    
  }

  async create(req: TransactionDto) {

  const schemaVal= await this.apicurioService.getSchema(req);
  console.log("objeto",schemaVal)
  
  if (!this.apicurioService.validate(schemaVal.properties.flowId,req.flowId)){
    
      throw new BadRequestException('el schema no es correcto')

  }else{
    
    console.log("el esquema es correcto");
  }
  
  var sample=jsf(schemaVal);

  console.log("el resultado de faker es :",sample);


  if (sample){
          
          
          return this.transactionRepository.save(sample as any);
      
            }else{
      
            throw new BadRequestException('transaction not create');
            }
      }
    }


   

     
    








    

    
  
