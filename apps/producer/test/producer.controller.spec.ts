import { BadRequestException, Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { create } from 'domain';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { TransactionsController } from '../../transaction/src/transaction/transaction.controller';
import { TransactionDto } from '../../transaction/src/transaction/transaction.dto';
import { TransactionsService } from '../../transaction/src/transaction/transaction.service';
import { ProducerController } from '../src/producer/producer.controller';
import { ProducerService } from '../src/producer/producer.service';

describe('PruebaController', () => {
  //let Appcontroller: AppController;
  let controller: ProducerController;
  let service:ProducerService;
  
const mockerProducer = {
    create: jest.fn((ProducerDto) => { 
      return {
        transactionId: 'sdjh78787',
        id:34,
        type:'facephi33',
        status: 'esperando',
        time: undefined,
        ...ProducerDto, 
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({ 
      controllers: [ProducerController],
      providers: [ProducerService] ,  
    })
    .overrideProvider(ProducerService)
    .useValue(mockerProducer)

   
    .compile();

    //Appcontroller = module.get<AppController>(AppController); 
    controller=module.get<ProducerController>(ProducerController)
    //service=module.get<TransactionsService>('TRANS_SERVICE')
  });





  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  

  it ('crea un producer',()=>{
    expect(controller.createProducer({transactionId: 'sdjh78787',
    id:34,
    type:'facephi33',
    status: 'esperando',
    time: undefined,})
    
  )})
      /*jest.spyOn(service,'create')
      .mockImplementation(()=>{
        throw new BadRequestException();
      });
      try{
        const response=await transaction.createTransaction({
          customId: "222-fff",
          transactionId: 'sdjh78787',
          process: false,
          time: undefined,
        });
      }catch (err){
        console.log(err)
      }*/
      
       
    
  
});
