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

        "flowId":"dfdfdsfsf",
        "process":false,
        "customId":"sfdsagfdg",
        "time":"",
        "data":{
            
        }

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
        "transactionId":"7660c4ad-daf4-4cc6-b1d0-03173b8b80c2",
        "flowId":"esse",
        "time":"dafdsfsdf",
        "tipo":"status changed",
        "data":{
            "status":"esperando"
        }
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

