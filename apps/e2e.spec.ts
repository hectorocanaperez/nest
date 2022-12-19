/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
//import * as request from 'supertest';
const request = require('supertest');
import * as req from 'superagent'
import { testCheck } from './e2e.test.';

import { AppModule } from './transaction/src/app.module';

import {AppModuleProducer} from './producer/src/app.module';







async function time() {
   await new Promise(resolve => setTimeout(resolve,3000))
}

describe('AppControllerService', () => {
    let app: INestApplication;
    let server;
  
    
    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule,AppModuleProducer],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
      server = await app.getHttpServer();
    });
  
    it('Check', async () => {
      let transactionId: string;
  
       await request(app.getHttpServer())
        .post('/transactions/transactions')
        .send({
          time:testCheck.time,
          customId: testCheck.customId,
          flowId:testCheck.flowId,
          transactionId:'',
          process:testCheck.process,
          data:{}
        })
        .expect((res) => {
          expect(res.body.transactionId).not.toBe(undefined);
          transactionId = res.body.transactionId;
        });
  
   
        for (const event of testCheck.events) {
            await request(app.getHttpServer())
              .post('/producers/producers')
              .send({
                transactionId,
                process:event.process,
                time: event.time,
                type: event.type,
                data: event.data,
                flowId: event.flowId,
              })
              .expect(201);
          }
        });
      
  
    
  
    afterAll(async () => {
        await time();
        await app.close();
      });
  });








  
  


