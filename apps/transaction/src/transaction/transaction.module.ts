import { Module } from '@nestjs/common';
import { TransactionsController } from './transaction.controller';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresqlModule } from '@app/postgresql';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Transaction])],

  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TypeOrmModule,TransactionsService],
})

export class TransactionsModule {}



