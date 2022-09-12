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

        "customId": "3i33-ññññkkkkñ",

        "process": false

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
        "transactionId":"82acc0c5-09f4-4636-9fab-801ff36735b9",
        "type":"facephi78",
        "time":"2022-08-23 11:19:01.202",
        "status":"esperando"
      })

     //idProducer = res.transactionId;

      expect(res.status).toBe(201);

    });

  });

  // describe('getProducer', () => {

  //   it('should return a 200 status', async () => {

  //     const res = await ( request.get(`${urlProducers}/producers/todos`))

  //    //idProducer = res.transactionId;

  //     expect(res.status).toBe(200);

  //   });

  // });

});

