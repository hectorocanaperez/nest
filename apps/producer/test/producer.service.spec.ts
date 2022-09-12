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
import { async } from 'rxjs';

describe('ProducerControllerCreate', () => {
  let controller: ProducerController;
  let service: ProducerService;
  //let serviceTran: TransactionsService
  let producerRepository: Repository<Producer>;
  let transactionRepository: Repository<Transaction>


  const PRODUCER_TOKEN=getRepositoryToken(Producer)
  const SEGUNDO_TOKEN=getRepositoryToken(Transaction)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],

      providers: [ProducerService,
    
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
            transactionId: '0ce9cc10-19d1-4643-9064-4c7cda9ab39d',
            id:34,
            type:'facephi33',
            status: 'esperando',
            time: undefined,
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
    //serviceTran=module.get<TransactionsService>(TransactionsService);
    transactionRepository=module.get<Repository<Transaction>>(SEGUNDO_TOKEN)
    producerRepository=module.get<Repository<Producer>>(PRODUCER_TOKEN)
  });



  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('producerrepository be definde',()=>{
    expect(producerRepository).toBeDefined();
  })

  describe('createProducer',()=>{
    it('should create PRODUCER',async()=>{
      const search=await service.create({
        transactionId: '0ce9cc10-19d1-4643-9064-4c7cda9ab39d',
        id:34,
        type:'facephi33',
        status: 'esperando',
        time: undefined,
      })
     
      const transaction = transactionRepository.findOne({

        where:{
          transactionId: search.transactionId
  
        }
          
      });
     if (transaction){
       expect(producerRepository.save(search));

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