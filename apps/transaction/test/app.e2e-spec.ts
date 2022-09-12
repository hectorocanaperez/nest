/*import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransactionsModule } from '../src/transaction/transaction.module';

describe('TransactionsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TransactionsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});*/

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TransactionsModule } from '../src/transaction/transaction.module';
import { TransactionsService } from '../src/transaction/transaction.service';

describe('AppController (e2e)', () => { 
  let app: INestApplication;
  const transactionService= {getHello:()=>['test']};

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TransactionsModule],
    })
      .overrideProvider(TransactionsService)
      .useValue(transactionService)
      .compile();

  beforeEach(async () => { 
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => { 
    return request(app.getHttpServer()) 
      .get('/') 
      .expect(200) 
      .expect('Hello World!'); 
  });
});
afterAll(async () => {
  await app.close();
});
});


/*


import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../apps/transaction/src/app.module';

describe('AppController (e2e)', () => { 
  let app: INestApplication;

  beforeEach(async () => { 
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => { 
    return request(app.getHttpServer()) 
      .get('/') 
      .expect(200) 
      .expect('Hello World!'); 
  });
});*/