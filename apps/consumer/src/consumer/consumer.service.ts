
import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { Producer } from '../../../producer/src/producer/producer.entity';
import { ReducerStore } from '../../../../reducers/reducer.store';





@Injectable()
export class ConsumerService {

  tiempo=20000;

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
  
  for (const n of listaTransactions){
      console.log("transactions-transactionsId",n.transactionId);
      
      listaProcess[n.transactionId]=[];
      
      const listaProducers=await this.producerRepository.find({
          where:{
            transactionId:n.transactionId
          }
      })

    listaProcess[n.transactionId]=[].concat(listaProducers);
  }
    console.log("lista trans-evento",listaProcess);
  
    Object.entries(listaProcess).forEach(([key, events]) => {
     
      const transaction = {};

      events.forEach(async event => {

        
        const reducer= this.reducerStore.getReducer(event.type);
       
        if (reducer) {
          const change = reducer(event,transaction);
          console.log("event",change)
          this.logger.log(`event reduced succesfully`);
      
          if (event.process===false && change){
            const searchProEve= await this.dataSource
            
            .createQueryBuilder()
            .update(Producer)
            .set({process:true})
            .where(`id =${event.id}`)
            .execute()
        
          }
        } else {
          this.logger.log(`event type [${event.type}] not found`); 
        }
  
      })
    })
    const reducerSearch= this.reducerStore.getReducer('statusChanged');
    const reducerSearchStep=this.reducerStore.getReducer('stepChanged')
      
    console.log("reduxStatus",reducerSearch);
    console.log("reduxStep",reducerSearchStep);

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
    
  


    
  

   

  





    

