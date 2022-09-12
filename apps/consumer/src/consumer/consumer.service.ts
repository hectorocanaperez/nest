/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
import { Cron,CronExpression } from '@nestjs/schedule';
import { Transaction } from 'apps/transaction/src/transaction/transaction.entity';
import { Producer } from 'apps/producer/src/producer/producer.entity';
import { ProducerDto } from 'apps/producer/src/producer/producer.dto';
import { ConsumerModule } from './consumer.module';
import postgres from 'postgres';





@Injectable()
export class ConsumerService {

  tiempo: number=30000;

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
    for (const n of listaTransactions){
      console.log("transactions",n.transactionId);
      listaProcess[n.transactionId]=[];
      const listaProducers=await this.producerRepository.find({
        where:{
          transactionId:n.transactionId
        }
      })
      
      listaProcess[n.transactionId]=[].concat(listaProducers);
    }
  
    
    console.log("lista producers-trans",listaProcess);

    const consumers= await this.producerRepository.find({
      where:{
        status:'suceed'
      }
    })
    console.log("consumidores(suceed)",consumers)
    
    const search= await this.dataSource
    .createQueryBuilder()
    .update(Producer)
    .set({status:"suceed"})
    .where("status = 'esperando'")
    .execute()

    console.log("estado",search)

    // for (const element of consumers){
    //   if(element.status==='suceed'){
    //     const change=await this.dataSource
    //     .createQueryBuilder()
    //     .update(Transaction)
    //     .set({process:false})
    //     .where("process = 'true'")
    //     .execute()


    //     console.log("change",change);
    //   }
      
    // }
    
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

  
/*
  private readonly logger = new Logger(ConsumerService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    
    const consulta= this.producerRepository.query('SELECT "type" FROM producer');

    console.log(consulta);
    this.logger.debug("aparece cada 5 seg");
    this.logger.log(consulta);
  }

 
  
  
  async getData(){
    return this.producerRepository.query('SELECT data FROM producer;');
  }*/



  /*
  async getAll(): Promise<Consumer[]> {
      return this.consumerRepository.find()
  }
  /*async create(consumerDto: ConsumerDto):Promise<Consumer> {
    const consumer = new Consumer()
    

   return this.consumerRepository.save(consumer);
}*/





//const client=new Client({
      //host:'localhost',
      //type: 'postgres',
      //port:5433,
      //username:'postgres',
      //password:'Complutense123?',
      //database:'actividad'
    //});
    //client.connect();
        //await client.query({
      //text:'Select * from "producer" where "status"=$1 FOR UPDATE LIMIT $2',
      //values:['CREATED',this.numeroConsumers]
       /*.then(result=>{
      //consumers= result.rows;
      consumers.forEach(e=>{
        this.producerRepository.findOne({
          where:{
            transactionId:e.transactionId
          }
        }).then((consumer)=>{
          this.producerRepository.save(consumer);
          this.transactionRepository.findOne({
            where:{
              transactionId:consumer.transaction.transactionId
            }
          }).then(transaction=>{
            transaction.status='suceed';
            this.transactionRepository.save(transaction)
          });
        });
      });
    }).catch(e=> console.error(e.stack))*/


