/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource, getManager, getRepository } from 'typeorm';
import { Cron,CronExpression } from '@nestjs/schedule';
import { Transaction } from 'apps/transaction/src/transaction/transaction.entity';
import { Producer } from 'apps/producer/src/producer/producer.entity';
import { ProducerDto } from 'apps/producer/src/producer/producer.dto';
import { ConsumerModule } from './consumer.module';
import postgres from 'postgres';
import { ReducerStore } from 'reducers/reducer.store';
import { type } from 'os';
import { stringify } from 'querystring';
import { Reducer } from 'reducers/reducer.type';
// import { reducerState } from 'reducers/reducerState';
// import { reducerStep } from 'reducers/reducerState';

@Injectable()
export class ConsumerService {

  tiempo: number=20000;

  constructor(
  @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
  @InjectRepository(Producer) private producerRepository: Repository<Producer>, 
  private readonly reducerStore: ReducerStore,
  private dataSource: DataSource,
  private readonly logger: Logger){
    this.TiempoConsumers()
  }


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

      // const listaProducersFlowId=await this.producerRepository.find({
      //   where:{
      //     flowId:n.flowId
      //   }
      // })
      
      listaProcess[n.transactionId]=[].concat(listaProducers);
      //listaFlowId[n.flowId]=[].concat(listaProducersFlowId);
      
    }

    Object.entries(listaProcess).forEach(([key, events]) => {
      // buscar la trasancion
      const transaction = {};

      // buscas el schema con el flowid de la transaccion

      events.forEach(event => {
        // buscas el reducer 

        const reducer: Function = this.reducerStore.getReducer(event.type);

        if (reducer) {
          const change = reducer(event,transaction);
          console.log(`event reduced succesfully`);
          // usar el reducer

          // validar si el resultado es valido

          // aplicar el cambio
        } else {
          console.log(`event type [${event.type}] not found`);
        }
      })
    })

    console.log("lista producers-trans",listaProcess);

    const reducerSearch= this.reducerStore.getReducer('step1');
      
    console.log("redux",reducerSearch)
    
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
    
     //query para modificar el estado


    // const searchState= await this.dataSource
    // .createQueryBuilder()
    // .update(Producer)
    // .set({data:{
    //   status:"process"}})
    // .where("type= 'status1'")
    // .execute()


    // const searchStateFinal= await this.dataSource
    // .createQueryBuilder()
    // .update(Producer)
    // .set({data:{
    //   status:"suceed"}})
    // .where("type= 'procesado'")
    // .execute()


     // const searchStep= await this.dataSource
    // .createQueryBuilder()
    // .update(Transaction)
    // .set({process:true})
    // .where("process= 'false'")
    // .execute()
  

   

  





    

