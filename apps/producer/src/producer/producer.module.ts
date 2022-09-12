import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TransactionsController } from 'apps/transaction/src/transaction/transaction.controller';
//import { TransactionDto } from 'apps/transaction/src/transaction/transaction.dto';
//import { TransactionsModule } from 'apps/transaction/src/transaction/transaction.module';
//import { TransactionsService } from 'apps/transaction/src/transaction/transaction.service';
import { ProducerController } from './producer.controller';
import { Producer } from './producer.entity';
import { ProducerService } from './producer.service';
import { TransactionsController } from 'apps/transaction/src/transaction/transaction.controller';
import { TransactionsService } from 'apps/transaction/src/transaction/transaction.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Producer]),TypeOrmModule.forFeature([Transaction])],
  controllers: [ProducerController,TransactionsController],
  providers: [ProducerService,TransactionsService],
  exports:[TypeOrmModule]
})
export class ProducerModule {}
