/* eslint-disable @typescript-eslint/no-unused-vars */
// import assert from 'assert';
// import { resolve } from 'path';
import * as req from 'superagent'



describe('TransactionEvent', () => {

  describe('createTransaction', () => {

    it('should return a 201 status', async () => {

      const res = await ( req.post('http://localhost:3003/transactions/transactions')).send({

        "transactionId":"",
        "flowId":"17d41e84-9dac-4ff3-8f86-84af998c9e8b",
        "process":false,
        "customId":"123-abc",
        "time":"2022-10-17 10:09:08.607381",
        "data":{}

      });

      expect(res.status).toBe(201);
    });

  });

  describe('checkTransaction', () => {

    it('should return transactionId is ok ', async () => {
      let transactionId: string;
      const res = await ( req.post('http://localhost:3003/transactions/transactions')).send({

        "transactionId":'',
        "flowId":"17d41e84-9dac-4ff3-8f86-84af998c9e8b",
        "process":false,
        "customId":"1234-abc",
        "time":"2022-10-17 10:09:08.607381",
        "data":{}

      });

      expect(res.body.transactionId).not.toBe(undefined);
      // eslint-disable-next-line prefer-const
      transactionId = res.body.transactionId;
    });

  });

  describe('getTransaction', () => {

    it('should return a 200 status', async () => {

      const res = await ( req.get('http://localhost:3003/transactions/todos'))

      expect(res.status).toBe(200);

    });

  });
 

  describe('getProducer', () => {

    it('should return a 200 status', async () => {

      const res = await ( req.get('http://localhost:3002/producers/todos'))

      expect(res.status).toBe(200);

    });

  });
  

  describe('createProducer', () => {

    it('should return a 201 status', async () => {

      const res = await ( req.post('http://localhost:3002/producers/producers')).send({
        "transactionId":"705ad8ae-a245-4f58-a394-05c96282b03b",
        "flowId":"25627da7-a2f3-46a8-9995-48676b453327",
        "time":"2022-10-17 10:09:08.607381",
        "process":false,
        "type":"statusChanged",
        "data":{
            "status":"esperando"
        }
      })

      expect(res.status).toBe(201);
    });

  });

});