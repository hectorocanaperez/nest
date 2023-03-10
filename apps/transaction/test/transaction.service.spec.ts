import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from '../src/transaction/transaction.controller';
import { TransactionsService } from '../src/transaction/transaction.service';
import { Transaction } from '../src/transaction/transaction.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ApicurioSchemaService} from '../../../apicurioSchema/apicurio.service'
import { BadRequestException } from '@nestjs/common';
import jsf from 'json-schema-faker';
// const jsf=require('json-schema-faker');

describe('TransactionsControllerCreate', () => {
  let controller: TransactionsController;
  let service: TransactionsService;
  let serviceApicurio:ApicurioSchemaService
  let transactionRepository: Repository<Transaction>;

  const TRANSACTION_TOKEN=getRepositoryToken(Transaction)
  const apicurioService = { getSchema: () => ({
    "transactionId":"",
    "flowId":"7aee2057-b1a3-424f-a057-8b817632a7ae",
    "process":false,
    "customId":"1245-cbab",
    "time":"2022-10-17 10:09:08.607381",
    "data":{}
    
   
}),
validate: () => ({
  "transactionId":"",
  "flowId":"7aee2057-b1a3-424f-a057-8b817632a7ae",
  "process":false,
  "customId":"1245-cbab",
  "time":"2022-10-17 10:09:08.607381",
  "data":{}
  
 
}),};


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService,ApicurioSchemaService,
      {
        provide:TRANSACTION_TOKEN,
        useValue:{
          create:jest.fn(),
          save:jest.fn(),
        }
      },
    ], 
        
    })
    .overrideProvider(ApicurioSchemaService) 
    .useValue(apicurioService)
    .compile();
   
    
    controller = module.get<TransactionsController>(TransactionsController);
    service = module.get<TransactionsService>(TransactionsService); 
    //serviceApicurio=module.get<ApicurioSchemaService>(ApicurioSchemaService); 
    transactionRepository=module.get<Repository<Transaction>>(TRANSACTION_TOKEN)
  });

  const search={
    
    "flowId":"7aee2057-b1a3-424f-a057-8b817632a7ae",
    "process":false,
    "customId":"",
    "time":"",
    "data":{},
    transactionId: ''
  }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('transactionrepository be definde',()=>{
    expect(transactionRepository).toBeDefined();
  })

  describe('createTransaction',()=>{
    it('should create transaction',async()=>{
      
//   const schemaVal= await serviceApicurio.getSchema(search.flowId);
//   console.log("este es el schema",schemaVal)
  
  
//   if (!serviceApicurio.validate(schemaVal,search.flowId)){
    
//       throw new BadRequestException('el schema no es correcto')

//   }else{
    
//     console.log("el esquema es correcto");
//   }
//   const sample=jsf(schemaVal);
//   if (sample){
    await service.create(search)
    expect(transactionRepository.save);
  
     
    })
  })
  it('should see hello world',async()=>{
    await service.getHello()
  })

});
