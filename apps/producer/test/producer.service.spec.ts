import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from '../../transaction/src/transaction/transaction.controller';
import { TransactionsService } from '../../transaction/src/transaction/transaction.service';
import { TransactionDto } from '../../transaction/src/transaction/transaction.dto';
import { Transaction } from '../../transaction/src/transaction/transaction.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProducerController } from '../src/producer/producer.controller';
import { ProducerService } from '../src/producer/producer.service';
import { Producer } from '../src/producer/producer.entity';
import { AppModule } from 'apps/transaction/src/app.module';
import { TransactionsModule } from 'apps/transaction/src/transaction/transaction.module';
const jsf=require('json-schema-faker');
import {ApicurioSchemaService} from '../../../apicurioSchema/apicurio.service'
import { BadRequestException } from '@nestjs/common';

describe('ProducerControllerCreate', () => {
  let controller: ProducerController;
  let service: ProducerService;
  //let serviceTran: TransactionsService
  let producerRepository: Repository<Producer>;
  let transactionRepository: Repository<Transaction>;
  let serviceApicurio:ApicurioSchemaService;


  const PRODUCER_TOKEN=getRepositoryToken(Producer)
  const SEGUNDO_TOKEN=getRepositoryToken(Transaction)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],

      providers: [ProducerService,ApicurioSchemaService,
    
      {
        provide:PRODUCER_TOKEN,
        useValue:{
          
          create:jest.fn(),
          save:jest.fn(),
          findOne:jest.fn(),
        },
        
      },
      {
        provide:SEGUNDO_TOKEN,
        useValue:{
          
          create:jest.fn(),
          save:jest.fn(),
          findOne:jest.fn().mockResolvedValue({
            transactionId: 'b8b1ded2-72a0-4da4-8c74-5f09e2f38639',
            flowId:'',
            id:334,
            type:'statusChanged',
            data:{
              status:'created',
              step:'iniciado',
            },
            time: '2022-10-17T10:09:08.607+02:00',
            })
        },
        
      },
    ], 
        
    })
    // .overrideProvider(TransactionsService) 
    // .useValue(resultService)
    .compile();

    controller = module.get<ProducerController>(ProducerController);
    service = module.get<ProducerService>(ProducerService); 
    serviceApicurio=module.get<ApicurioSchemaService>(ApicurioSchemaService); 
    //serviceTran=module.get<TransactionsService>(TransactionsService);
    transactionRepository=module.get<Repository<Transaction>>(SEGUNDO_TOKEN)
    producerRepository=module.get<Repository<Producer>>(PRODUCER_TOKEN)
  });

const search={
            'transactionId': 'b8b1ded2-72a0-4da4-8c74-5f09e2f38639',
            'flowId':'26078740-244e-42ee-98f5-2452d0c8dc81',
            'id':334,
            'type':'statusChanged',
            'data':{
              'status':'created',
              'step':'iniciado',
            },
            'time': '2022-10-17T10:09:08.607+02:00',
}

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('producerrepository be definde',()=>{
    expect(producerRepository).toBeDefined();
  })

  describe('createProducer',()=>{
    it('should create PRODUCER',async()=>{
      const schemaVal= await serviceApicurio.getSchema(search.flowId);
      console.log("este es el schema",schemaVal)
      
      
      if (!serviceApicurio.validate(schemaVal,search.data)){
        
          throw new BadRequestException('el schema no es correcto')

      }else{
        
        console.log("el esquema es correcto");
        
        


          const transaction = await transactionRepository.findOne({

            where:{
              transactionId: search.transactionId
      
            }
              
          });
         if (transaction){
          const req=await service.create(search)
           expect(producerRepository.save(req));
    
          }else{
            console.log("errorrrrrr")
          }
        
        
     
      
      }
      
      
      
    })
  })

  /*describe('obtener todas transactions',()=>{
    it('should see transacion',async()=>{
      await service.getAll()
    })
    expect(transactionRepository.find())
  })*/

  
    it('should see hello world',async()=>{
      await service.getHello()
    })
   
  

});