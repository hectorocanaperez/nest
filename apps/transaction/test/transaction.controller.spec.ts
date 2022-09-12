/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BadRequestException, Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { create } from 'domain';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { TransactionsController } from '../src/transaction/transaction.controller';
import { TransactionDto } from '../src/transaction/transaction.dto';
import { TransactionsService } from '../src/transaction/transaction.service';

describe('PruebaController', () => {
  //let Appcontroller: AppController;
  let transaction: TransactionsController;
  let service:TransactionsService;
  
const mockerTransaction = {
    create: jest.fn((TransactionDto) => { 
      return {
        customId: "222-fff",
        transactionId: 'sdjh78787',
        process: false,
        time: undefined,
        ...TransactionDto, 
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({ 
      controllers: [TransactionsController],
      providers: [TransactionsService] ,  
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
    expect(transaction.createTransaction({customId: "222-fff",
    transactionId: 'sdjh78787',
    process: false,
    time: undefined,})
    
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



