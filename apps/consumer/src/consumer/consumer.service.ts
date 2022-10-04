/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource, getManager, getRepository } from 'typeorm';
import { Cron,CronExpression } from '@nestjs/schedule';
import { Transaction } from 'apps/transaction/src/transaction/transaction.entity';
import { Producer } from 'apps/producer/src/producer/producer.entity';
import { ProducerDto } from 'apps/producer/src/producer/producer.dto';
import { ConsumerModule } from './consumer.module';
import postgres from 'postgres';
import { query } from 'express';


@Injectable()
export class ConsumerService {

  tiempo: number=10000;

  constructor(
  @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
  @InjectRepository(Producer) private producerRepository: Repository<Producer>, 
  private dataSource: DataSource){this.TiempoConsumers()}

  

  async actualizarConsumers(){
 
    const listaTransactions= await this.transactionRepository.find({
      
      where:{
        process: false
      },
      
    })
    const listaProcess=[];
    const listaFlowId=[];
    for (const n of listaTransactions){
      console.log("transactions-transactionsId",n.transactionId);
      console.log("flowId",n.flowId)
      listaProcess[n.transactionId]=[];
      listaFlowId[n.flowId]=[];
      const listaProducers=await this.producerRepository.find({
        where:{
          transactionId:n.transactionId
        }
      })

      const listaProducersFlowId=await this.producerRepository.find({
        where:{
          flowId:n.flowId
        }
      })
      
      listaProcess[n.transactionId]=[].concat(listaProducers);
      listaFlowId[n.flowId]=[].concat(listaProducersFlowId);
      
    }
  
    
    console.log("lista producers-trans",listaProcess);
    console.log("lista producers-flowId",listaFlowId);

  
   
  }

  TiempoConsumers(){
  // setInterval(()=>{
  //    this.actualizarConsumers();
  //  },this.tiempo)
   this.actualizarConsumers();
  }

  async getHello(){
    return "Hello World!";
  }
}
    









    

