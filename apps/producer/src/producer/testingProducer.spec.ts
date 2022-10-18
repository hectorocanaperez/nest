import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';


import { AppModuleProducer } from '../app.module';
import { ProducerModule } from '../producer/producer.module';




describe('ProducerServiceModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModuleProducer],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should load transaction module', () => {
    expect(app.get(ProducerModule)).toBeInstanceOf(ProducerModule);
  });
});