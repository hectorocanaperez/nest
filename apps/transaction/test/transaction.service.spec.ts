import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from '../src/transaction/transaction.controller';
import { TransactionsService } from '../src/transaction/transaction.service';
import { TransactionDto } from '../src/transaction/transaction.dto';
import { Transaction } from '../src/transaction/transaction.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ApicurioSchemaService} from '../../../apicurioSchema/apicurio.service'
import { BadRequestException } from '@nestjs/common';
const jsf=require('json-schema-faker');

describe('TransactionsControllerCreate', () => {
  let controller: TransactionsController;
  let service: TransactionsService;
  let serviceApicurio:ApicurioSchemaService
  let transactionRepository: Repository<Transaction>;

  const TRANSACTION_TOKEN=getRepositoryToken(Transaction)

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
    // .overrideProvider(TransactionsService) 
    // .useValue(resultService)
    .compile();

    controller = module.get<TransactionsController>(TransactionsController);
    service = module.get<TransactionsService>(TransactionsService); 
    serviceApicurio=module.get<ApicurioSchemaService>(ApicurioSchemaService); 
    transactionRepository=module.get<Repository<Transaction>>(TRANSACTION_TOKEN)
  });

  const search={
    "flowId":"51afec2e-93c2-4ba8-9f3d-519dfab59312",
    "process":false,
    "customId":"",
    "time":"",
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
  const schemaVal= await serviceApicurio.getSchema(search.flowId);
  console.log("este es el schema",schemaVal)
  
  
  if (!serviceApicurio.validate(schemaVal,search.flowId)){
    
      throw new BadRequestException('el schema no es correcto')

  }else{
    
    console.log("el esquema es correcto");
  }
  var sample=jsf(schemaVal);
  if (sample){
    await service.create(search)
    expect(transactionRepository.save);
  }
     
    })
  })
  it('should see hello world',async()=>{
    await service.getHello()
  })

});
  /*describe('obtener todas transactions',()=>{
    it('should see transacion',async()=>{
      await service.getAll()
    })
    expect(transactionRepository.find())
  })*/

  
