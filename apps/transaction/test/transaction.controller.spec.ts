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
      flowId:"7aee2057-b1a3-424f-a057-8b817632a7ae",
    customId:"111-bgbgb",
    time:"2022-10-17 10:09:08.607381",
   
  })
    
  )})
  
});