/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { Test, TestingModule } from '@nestjs/testing';
import {ApicurioSchemaService} from '../../../apicurioSchema/apicurio.service'
import { TransactionsController } from '../src/transaction/transaction.controller';
import { TransactionsService } from '../src/transaction/transaction.service';

describe('PruebaController', () => {
  //let Appcontroller: AppController;
  let transaction: TransactionsController;
  let service:TransactionsService;
  
const mockerTransaction = {
    create: jest.fn((TransactionDto) => { 
      return {
        customId: "222-fff",
        transactionId: '',
        process: false,
        tipo:"status changed",
        time: '2022-10-17 10:09:08.607381',
        data:{},
        
        ...TransactionDto, 
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({ 
      controllers: [TransactionsController],
      providers: [TransactionsService,ApicurioSchemaService] ,  
    })
    .overrideProvider(TransactionsService)
    .useValue(mockerTransaction)

   
    .compile();

    //Appcontroller = module.get<AppController>(AppController); 
    transaction=module.get<TransactionsController>(TransactionsController)
    //service=module.get<TransactionsService>('TRANS_SERVICE')
  });


  it('should be defined', () => {
    expect(transaction).toBeDefined();
  });
  
  it ('crea una transaction',()=>{
    expect(transaction.createTransaction({ 
      transactionId:"",
      process:false,
      data:{},
      flowId:"17d41e84-9dac-4ff3-8f86-84af998c9e8b",
    customId:"111-bgbgb",
    time:"2022-10-17 10:09:08.607381",
   
  })
    
  )})
  
});
  /*it('should create a transaction', () => {
    const transactionDto: TransactionDto = { 
      customId: "222-fff",
      transactionId: 'sdjh78787',
      process: false,
      time:null ,
    };
    expect(transaction.createTransaction(transactionDto)).toEqual({ 
    
        customId: expect.any(String),
        transactionId: expect.any(String),
        process: expect.any(Boolean),
        time:expect.any(Date),
    
      
      ...create
      
    });
  });*/



