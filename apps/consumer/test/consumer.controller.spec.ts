import { Test, TestingModule } from '@nestjs/testing';
//import { TransactionController } from '../transaction/transaction.controller';
import {AppService} from '../src/app.service';
import { AppController } from '../src/app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers:[AppService]
    }).compile();

   appController = app.get<AppController>(AppController);
  });

  describe ('root',()=>{
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

});
