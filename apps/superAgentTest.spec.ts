//var req = require('superagent');

import assert from 'assert';
import { resolve } from 'path';
import * as req from 'superagent'



describe('TransactionEvent', () => {

  describe('createTransaction', () => {

    it('should return a 201 status', async () => {

      const res = await ( req.post('http://localhost:3003/transactions/transactions')).send({

        "transactionId":"",
        "flowId":"d3fb817b-26e5-46d3-8ba4-187ba10a0451",
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
        "flowId":"d3fb817b-26e5-46d3-8ba4-187ba10a0451",
        "process":false,
        "customId":"1234-abc",
        "time":"2022-10-17 10:09:08.607381",
        "data":{}

      });

      expect(res.body.transactionId).not.toBe(undefined);
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
        "transactionId":"99cee408-2add-483e-aa7e-d387e6273b92",
        "flowId":"b51ec619-1adc-4dee-b11c-e4d608b78088",
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