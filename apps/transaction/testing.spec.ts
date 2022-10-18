import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './src/app.module';
import { TransactionsModule } from './src/transaction/transaction.module';


describe('TransactionServiceModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should load transaction module', () => {
    expect(app.get(TransactionsModule)).toBeInstanceOf(TransactionsModule);
  });
});








