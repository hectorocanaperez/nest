/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PostgresqlModule } from '@app/postgresql';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TransactionsModule } from 'apps/transactions/src/transactions/transactions.module';
//import { PostgresqlModule } from '@app/postgresql';
import { ProducerModule } from './producer/producer.module';
import { TransactionsService } from 'apps/transaction/src/transaction/transaction.service';
import { TransactionsModule } from '../../transaction/src/transaction/transaction.module';
import {ConfigModule} from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    username:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    autoLoadEntities: true,
    type: 'postgres',
    port: 5433,
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10,
  }),
    
    TransactionsModule,
     ProducerModule,
     
    ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule],
})
export class AppModuleProducer {}
