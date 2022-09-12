import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from '../src/transaction/transaction.controller';
import { TransactionsService } from '../src/transaction/transaction.service';
import { TransactionDto } from '../src/transaction/transaction.dto';
import { Transaction } from '../src/transaction/transaction.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('TransactionsControllerCreate', () => {
  let controller: TransactionsController;
  let service: TransactionsService;
  let transactionRepository: Repository<Transaction>;

  const TRANSACTION_TOKEN=getRepositoryToken(Transaction)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService,
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
    transactionRepository=module.get<Repository<Transaction>>(TRANSACTION_TOKEN)
  });



  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('transactionrepository be definde',()=>{
    expect(transactionRepository).toBeDefined();
  })

  describe('createTransaction',()=>{
    it('should create transaction',async()=>{
      await service.create({
        customId: "222-fff",
        transactionId: 'sdjh78787',
        process: false,
        time: undefined,
      })
      expect(transactionRepository.save);
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

  
