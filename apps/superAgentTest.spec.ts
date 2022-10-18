/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-var-requires */

var request = require('superagent');

describe('TransactionController', () => {



  // const urlTransactions = 'http://localhost:3003';

  // const urlProducers = 'http://localhost:3002';

  // let idTransaction = null;

  // let idProducer = null;



  

  describe('createTransaction', () => {

    it('should return a 201 status', async () => {

      const res = await ( request.post('http://localhost:3003/transactions/transactions')).send({

        "flowId":"51afec2e-93c2-4ba8-9f3d-519dfab59312",
        "process":false,
        "customId":"sfdsagfdg",
        "time":"2022-10-17 10:09:08.607381"

      });

     //idTransaction = res.transactionId;

      expect(res.status).toBe(201);

    });

  });

  describe('getTransaction', () => {

    it('should return a 200 status', async () => {

      const res = await ( request.get('http://localhost:3003/transactions/todos'))

     //idTransaction = res.transactionId;

      expect(res.status).toBe(200);

    });

  });
 

  describe('getProducer', () => {

    it('should return a 200 status', async () => {

      const res = await ( request.get('http://localhost:3002/producers/todos'))

     //idProducer = res.transactionId;

      expect(res.status).toBe(200);

    });

  });
  

  describe('createProducer', () => {

    it('should return a 201 status', async () => {

      const res = await ( request.post('http://localhost:3002/producers/producers')).send({
        "transactionId":"b8b1ded2-72a0-4da4-8c74-5f09e2f38629",
        "flowId":"26078740-244e-42ee-98f5-2452d0c8dc81",
        "time":"2022-10-17 10:09:08.607381",
        "type":"status changed",
        "data":{
            "status":"esperando"
        }
      })

     //idProducer = res.transactionId;

      expect(res.status).toBe(201);

    });

  });



//   describe('getProducer', () => {

//     it('should return a 200 status', async () => {

//       const res = await ( request.get(`${urlProducers}/producers/todos`))

//      //idProducer = res.transactionId;

//       expect(res.status).toBe(200);

//     });

//   });

// });





// var request = require('superagent');
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import {ApicurioSchemaService} from '../apicurioSchema/apicurio.service'
// import { ProducerController } from './producer/src/producer/producer.controller';
// import { Producer } from './producer/src/producer/producer.entity';
// import { ProducerService } from './producer/src/producer/producer.service';
// import { TransactionsController } from './transaction/src/transaction/transaction.controller';
// import { Transaction } from './transaction/src/transaction/transaction.entity';
// import { Test, TestingModule } from '@nestjs/testing';
// import { TransactionsService } from './transaction/src/transaction/transaction.service';
// import { BadRequestException } from '@nestjs/common';
// const jsf=require('json-schema-faker');

// describe('Controller', () => {

//   let transactionController : TransactionsController;
//   let transactionService: TransactionsService
//   let controller: ProducerController;
//   let service: ProducerService;
//   //let serviceTran: TransactionsService
//   let producerRepository: Repository<Producer>;
//   let transactionRepository: Repository<Transaction>;
//   let serviceApicurio:ApicurioSchemaService;


//   const PRODUCER_TOKEN=getRepositoryToken(Producer)
//   const SEGUNDO_TOKEN=getRepositoryToken(Transaction)

  


//   // const urlTransactions = 'http://localhost:3003';

//   // const urlProducers = 'http://localhost:3002';

//   // let idTransaction = null;

//   // let idProducer = null;


//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [TransactionsController,ProducerController],

//       providers: [ProducerService,TransactionsService,ApicurioSchemaService,
    
//       {
//         provide:PRODUCER_TOKEN,
//         useValue:{
          
//           create:jest.fn(),
//           save:jest.fn(),
//           findOne:jest.fn(),
//         },
        
//       },
//       {
//         provide:SEGUNDO_TOKEN,
//         useValue:{
          
//           create:jest.fn(),
//           save:jest.fn(),
//           findOne:jest.fn()
//         },
        
//       },
//     ], 
        
//     })
//     // .overrideProvider(TransactionsService) 
//     // .useValue(resultService)
//     .compile();

//     transactionController = module.get<TransactionsController>(TransactionsController);
//     transactionService = module.get<TransactionsService>(TransactionsService); 
//     controller = module.get<ProducerController>(ProducerController);
//     service = module.get<ProducerService>(ProducerService); 
//     serviceApicurio=module.get<ApicurioSchemaService>(ApicurioSchemaService); 
//     //serviceTran=module.get<TransactionsService>(TransactionsService);
//     transactionRepository=module.get<Repository<Transaction>>(SEGUNDO_TOKEN)
//     producerRepository=module.get<Repository<Producer>>(PRODUCER_TOKEN)
//   });
  
//   const search={
//     "flowId":"51afec2e-93c2-4ba8-9f3d-519dfab59312",
//     "process":false,
//     "customId":"",
//     "time":""
//     //"transactionId": ''
//   }
//   describe('createTransaction', () => {

//     it('should return a 201 status', async () => {

      

//   const res = await ( request.post('http://localhost:3003/transactions/transactions')).send({
//     "flowId":"51afec2e-93c2-4ba8-9f3d-519dfab59312",
//     "process":false,
//     "customId":"",
//     "time":""
//   });
//   const schemaVal= await serviceApicurio.getSchema(res.flowId);
 


//   if (!serviceApicurio.validate(schemaVal,res.flowId)){
  
//     throw new BadRequestException('el schema no es correcto')

//   }else{
 
//  console.log("el esquema es correcto");
 
// }
//      //idTransaction = res.transactionId;

//   expect(res.status).toBe(201);
 

      

//     });

//   });

//   describe('getTransaction', () => {

//     it('should return a 200 status', async () => {

//       const res = await ( request.get('http://localhost:3003/transactions/todos'))

//      //idTransaction = res.transactionId;

//       expect(res.status).toBe(200);

//     });

//   });
 

//   describe('getProducer', () => {

//     it('should return a 200 status', async () => {

//       const res = await ( request.get('http://localhost:3002/producers/todos'))

//      //idProducer = res.transactionId;

//       expect(res.status).toBe(200);

//     });

//   });
  

//   describe('createProducer', () => {

//     it('should return a 201 status', async () => {

//       const res = await ( request.post('http://localhost:3002/producers/producers')).send({
//         "transactionId":"f8e09868-fb0a-458c-8a16-7ed3f73fcecb",
//         "flowId":"1ddff236-190a-40e5-a223-5fd7fe23b89f",
//         "time":"",
//         "type":"status1",
//         "data":{
//             "state":"process"
            
           
//         }
//       })

//      //idProducer = res.transactionId;

//       expect(res.status).toBe(201);

//     });

//   });

//   // describe('getProducer', () => {

//   //   it('should return a 200 status', async () => {

//   //     const res = await ( request.get(`${urlProducers}/producers/todos`))

//   //    //idProducer = res.transactionId;

//   //     expect(res.status).toBe(200);

//   //   });

//   // });

});